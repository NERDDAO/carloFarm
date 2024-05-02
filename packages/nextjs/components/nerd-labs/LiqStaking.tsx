//import FarmEarnings from "./FarmEarnings";
//
import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import { ethers } from "ethers";
import Modal from "react-modal";
import { useAccount } from "wagmi";
import FarmApprove from "~~/components/nerd-labs/farmApprove";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

// Adjust the type definition to include the dynamic types

const LiqStaking = () => {
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
    },
  };

  const maxAmount = ethers.MaxUint256;

  const account = useAccount();
  const farmList: FarmProps[] = [
    {
      name: "$Carlo/$WETH",
      address: "0x53f64cde28dd3caef17e701593b4ad7a95f0f61c",
      poolName: "wethStakingPool",
      pool: "0x3FdC7fEf77208Aaac44E81bA982a9855642411D2",
    },
  ];
  type ContractName = "$Carlo/$WETH" | "wethStakingPool" | typeof currentFarm.poolName;

  const [farmIndex, setFarmIndex] = useState(0);
  const currentFarm = farmList[farmIndex];
  //const [isUnstake, setIsUnstake] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [optIndex, setOptIndex] = useState(3);
  const [fcknBalance, setFcknBalance] = useState(0);
  const [xFcknBalance, setXFcknBalance] = useState(0);

  const approval = useScaffoldReadContract({
    contractName: currentFarm.name,
    functionName: "allowance",
    args: [account.address, currentFarm.pool],
  });
  const balance = useScaffoldReadContract({
    contractName: currentFarm.name,
    functionName: "balanceOf",
    args: [account.address],
  });
  const earned = useScaffoldReadContract({
    contractName: currentFarm.poolName,
    functionName: "earned",
    args: [account.address],
  });
  const stakedBalance = useScaffoldReadContract({
    contractName: currentFarm.poolName,
    functionName: "balanceOf",
    args: [account.address],
  });
  const claim = {
    contractName: currentFarm.poolName,
    functionName: "getReward",
  };

  const stake = {
    contractName: currentFarm.poolName,
    functionName: "stake",
    args: [BigInt(fcknBalance * 1e18)],
  };

  const approve = {
    contractName: currentFarm.name,
    functionName: "approve",
    args: [currentFarm.pool, maxAmount],
  };

  const unstake = {
    contractName: currentFarm.poolName,
    functionName: "withdraw",
    args: [BigInt(xFcknBalance * 1e18)],
  };

  const { writeContractAsync: writeApprove, isPending: isApprovePending } = useScaffoldWriteContract(
    approve.contractName,
  );

  const { writeContractAsync: writeStake, isPending: isStakePending } = useScaffoldWriteContract(stake.contractName);

  const { writeContractAsync: writeUnstake, isPending: isUnstakePending } = useScaffoldWriteContract(
    unstake.contractName,
  );

  const { writeContractAsync: writeClaim, isPending: isClaiming } = useScaffoldWriteContract(
    unstake.contractName,
  );

  const handleApproveFunction = async () => {
    try {
      await writeApprove(
        {
          functionName: approve.functionName,
          args: approve.args,
          value: approve.value ? parseEther(approve.value) : "",
        },
        {
          onBlockConfirmation: txnReceipt => {
            console.log("📦 Transaction blockHash", txnReceipt.blockHash);
          },
        },
      );
    } catch (e) {
      console.error(`"Error transacting ${approve.functionName} on ${approve.contractName}"`, e);
    }
  };

  const handleStakeFunction = async () => {
    try {
      await writeStake(
        {
          functionName: stake.functionName,
          args: stake.args,
        },
        {
          onBlockConfirmation: txnReceipt => {
            console.log("📦 Transaction blockHash", txnReceipt.blockHash);
          },
        },
      );
    } catch (e) {
      console.error(`"Error transacting ${stake.functionName} on ${stake.contractName}"`, e);
    }
  };

  const handleUnstakeFunction = async () => {
    try {
      await writeUnstake(
        {
          functionName: unstake.functionName,
          args: unstake.args,
          value: unstake.value ? parseEther(unstake.value) : "",
        },
        {
          onBlockConfirmation: txnReceipt => {
            console.log("📦 Transaction blockHash", txnReceipt.blockHash);
          },
        },
      );
    } catch (e) {
      console.error(`"Error transacting ${unstake.functionName} on ${unstake.contractName}"`, e);
    }
  };

  const handleClaimFunction = async () => {
    try {
      await writeClaim(
        {
          functionName: claim.functionName,
          args: claim.args,
        },
        {
          onBlockConfirmation: txnReceipt => {
            console.log("📦 Transaction blockHash", txnReceipt.blockHash);
          },
        },
      );
    } catch (e) {
      console.error(`"Error transacting ${claim.functionName} on ${claim.contractName}"`, e);
    }
  };

  useEffect(() => {
    if (!currentFarm) return;
    balance.refetch();
    stakedBalance.refetch();
    approval.refetch();
    earned.refetch();
  }, [currentFarm, account.address]);

  const optts = ["approve", "both"];

  useEffect(() => {
    const checkApproval = async () => {
      const allowance = Number(approval.data);
      if (allowance > 0) {
        setOptIndex(optts.indexOf("both"));
      } else {
        setOptIndex(optts.indexOf("approve"));
      }
    };

    checkApproval();
  }, [approval.data]);

  const liquidityFunctionRender = () => {
    switch (optts[optIndex]) {
      case "approve":
        return (
          <>
            <strong>Carlo Approve</strong>
            <span className="text-sm">$Carlo LP Balance: {(Number(balance.data) * 1e-18).toFixed(3)} UniV2</span>
            <Tippy className="relative" content={<span>Approve</span>}>
              <button className="btn btn-primary" onClick={handleApproveFunction} disabled={isApprovePending}>
                {isApprovePending ? <span className="loading loading-spinner loading-sm"></span> : "Approve"}
              </button>
            </Tippy>
          </>
        );
      case "both":
        return (
          <>
            <div>
              <strong>Deposit $Carlo</strong>
              <input
                className="border-2"
                placeholder="$Carlo Balance"
                value={fcknBalance}
                type="number"
                onChange={e => setFcknBalance(Number(e.target.value))}
                style={{ color: 'white' }}
              />
              <Tippy className="relative" content={<span>Deposit</span>}>
                <button className="btn btn-primary" onClick={handleStakeFunction} disabled={isStakePending}>
                  {isStakePending ? <span className="loading loading-spinner loading-sm"></span> : "Deposit"}
                </button>
              </Tippy>
            </div>
            <div>
              <strong>Withdraw $Carlo</strong>
              <input
                className="border-2"
                placeholder="$xFCKN Balance"
                value={xFcknBalance}
                type="number"
                onChange={e => setXFcknBalance(Number(e.target.value))}
                style={{ color: 'white' }}
              />
              <Tippy className="relative" content={<span>Withdraw</span>}>
                <button className="btn btn-primary" onClick={handleUnstakeFunction} disabled={isUnstakePending}>
                  {isUnstakePending ? <span className="loading loading-spinner loading-sm"></span> : "Withdraw"}
                </button>
              </Tippy>
            </div>
          </>
        );
      default:
        return <div>default{modalIsOpen}</div>;
    }
  };

  return (
    <>
      <Tippy className="relative top-12" content={<span>View $CARLO/ETH LP Farm</span>}>
        <div
          onClick={() => setModal2IsOpen(true)}
          className="bg-[url(/iprofile.png)] hover:bg-[url(/pee.png)] bg-contain bg-no-repeat relative h-full w-full"
        />
      </Tippy>

      <Modal
        isOpen={modal2IsOpen}
        onRequestClose={() => setModal2IsOpen(false)}
        contentLabel="Exercise Completed"
        style={modalStyles}
      >
        <div class="card w-96 bg-base-100 shadow-xl font-satoshi text-[#3029ff] p-6">
          <div className="card-title font-satoshi text-3xl">FARM</div>
          <div class="card-body">{liquidityFunctionRender()}</div>
          <br />
          $Carlo/$wETH LP Token Balance: {(Number(balance.data) * 1e-18).toFixed(3)}
          <br />
          <span className="text-3x1">
            <br />
            Staked $Carlo LP Balance: {(Number(stakedBalance.data) * 1e-18).toFixed(3)}
          </span>
          Earned: {(Number(earned.data) * 1e-18).toFixed(3)} $Carlo
          <br />
          <Tippy className="relative" content={<span>Claim Rewards</span>}>
            <button
              className={`btn btn-primary ${isClaiming ? 'loading' : ''}`}
              onClick={handleClaimFunction}
              disabled={isClaiming}
            >
              {isClaiming ? 'Claiming...' : 'Claim Rewards'}
            </button>
            </Tippy>
            {isClaiming ? <span className="loading loading-spinner loading-sm"></span> : ""}
          <p className="flex flex-row">
            Options: {" "}
            {farmList.map((farm, index) => {
              return (
                <button className="border-emerald-200 border-solid pl-2" key={index} onClick={() => setFarmIndex(index)}>
                  {farm.name}
                </button>
              );
            })}
          </p>
          Selected Farm: <strong>{currentFarm.name}</strong>
          <a className="text-xs text-blue-500" href={`https://basescan.org/token/${currentFarm.pool}`} target="_blank">
            View in BaseScan
          </a>
          <div className="card-actions justify-end">
            {" "}
            {Number(stakedBalance.data) !== 0 && (
              <Tippy className="relative" content={<span>Claim $Carlo Earnings</span>}>
                <button
                  className="color-blue-500 border-e-rose-200 border-2 pr-3 mb-2 mr-2 h-[25px] w-[50px]"
                  onClick={() => {
                    claim.write();
                  }}
                >
                  Claim
                </button>
              </Tippy>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LiqStaking;
