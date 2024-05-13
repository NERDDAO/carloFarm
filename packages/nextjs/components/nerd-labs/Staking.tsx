import React, { useEffect, useState } from "react";
import FarmEarnings from "./FarmEarnings";
import FarmApprove from "./farmApprove";
import Tippy from "@tippyjs/react";
import Modal from "react-modal";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { decimalAdjust } from "~~/utils/nerd/utils";

const Staking = () => {
  //const maxAmount = ethers.MaxUint256;

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

  const account = useAccount();
  const stakingPool = "0x6901d3A45dc3e4E79f5eDd60ABE57C35feBB8005";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [optIndex, setOptIndex] = useState(0);
  const [fcknBalance, setFcknBalance] = useState(0);
  const [xFcknBalance, setXFcknBalance] = useState(0);
  const floor10 = (value, exp) => decimalAdjust("floor", value, exp);

  const balance = useScaffoldReadContract({
    contractName: "fcknToken",
    functionName: "balanceOf",
    args: [account.address],
  });
  const approval = useScaffoldReadContract({
    contractName: "fcknToken",
    functionName: "allowance",
    args: [account.address, stakingPool],
  });
  useEffect(() => {
    const checkApproval = async () => {
      const allowance = Number(approval.data);
      if (allowance > 0) {
        setOptIndex(1);
      } else {
        setOptIndex(0);
      }
    };
    checkApproval();
  }, [approval.data]);

  const stakedBalance = useScaffoldReadContract({
    contractName: "xStakingPool",
    functionName: "balanceOf",
    args: [account.address],
  });
  const ppShare = useScaffoldReadContract({
    contractName: "xStakingPool",
    functionName: "getPricePerFullShare",
  });

  const stake = {
    contractName: "xStakingPool",
    functionName: "stake",
    args: [BigInt(fcknBalance * 1e18)],
  };

  const unstake = {
    contractName: "xStakingPool",
    functionName: "withdraw",
    args: [BigInt(xFcknBalance * 1e18)],
  };

  const { writeContractAsync: writeStake, isPending: isStakePending } = useScaffoldWriteContract(stake.contractName);

  const { writeContractAsync: writeUnstake, isPending: isUnstakePending } = useScaffoldWriteContract(
    unstake.contractName,
  );

  const handleStakeFunction = async (onDepositSuccess: () => void) => {
    try {
      await writeStake(
        {
          functionName: stake.functionName,
          args: stake.args,
          value: stake.value ? parseEther(stake.value) : "",
        },
        {
          onBlockConfirmation: txnReceipt => {
            console.log("📦 Transaction blockHash", txnReceipt.blockHash);
            onDepositSuccess(); // Call the callback after successful deposit
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

  const optts = ["approve", "deposit", "withdraw"];

  const functionRender = () => {
    switch (optts[optIndex]) {
      case "approve":
        return <FarmApprove onApproveSuccess={() => setOptIndex(1)} />;
      case "deposit":
        return (
          <div className="flex flex-col card-body">
            <span className="text-2xl font-twist">STAKING</span>
            <div class="stats">
              <div class="stat-title text-accent"> $Carlo Balance:</div>
              <div className="stat-value">{(Number(balance?.data) * 1e-18).toFixed(3)} $Carlo</div>
              <div class="stat-title text-accent"> Staked $Carlo Balance: </div>
              <div className="stat-value">
                {" "}
                {(Number(ppShare.data) * 1e-18 * (Number(stakedBalance.data) * 1e-18)).toFixed(3)} $Carlo{" "}
              </div>
              <div class="stat-desc text-accent">
                {" "}
                Price Per Share: {(Number(ppShare.data) * 1e-18).toFixed(3)} $Carlo{" "}
              </div>

              <div class="stat-desc text-accent">
                {" "}
                xCarlo Shares {(Number(stakedBalance?.data) * 1e-18).toFixed(3)}{" "}
              </div>
            </div>
            <div className="flex flex-row">
              <label
                className="cursor-pointer border-2"
                onClick={() => setFcknBalance(floor10(Number(balance.data) || 0, 3) * 1e-18)}
              >
                MAX
              </label>
              <input
                className="border-2 text-accent"
                placeholder="$Carlo"
                value={fcknBalance}
                type="number"
                onChange={e => setFcknBalance(Number(e.target.value))}
              />
            </div>
            <Tippy className="relative" content={<span>Wrap $Carlo</span>}>
              <button
                className="btn btn-primary"
                onClick={() => handleStakeFunction(() => setOptIndex(optts.indexOf("withdraw")))}
                disabled={isStakePending}
              >
                {isStakePending ? <span className="loading loading-spinner loading-sm"></span> : "Deposit"}
              </button>
            </Tippy>
          </div>
        );
      case "withdraw":
        return (
          <div className="flex flex-col card-body">
            <span className="text-2xl font-twist">UNSTAKING</span>
            <div class="stats">
              <div class="stat-title text-accent"> $Carlo Balance:</div>
              <div className="stat-value">{(Number(balance?.data) * 1e-18).toFixed(3)} $Carlo</div>
              <div class="stat-title text-accent"> Staked $Carlo Balance: </div>
              <div className="stat-value">
                {" "}
                {(Number(ppShare.data) * 1e-18 * (Number(stakedBalance.data) * 1e-18)).toFixed(3)} $Carlo{" "}
              </div>
              <div class="stat-desc text-accent">
                {" "}
                Price Per Share: {(Number(ppShare.data) * 1e-18).toFixed(3)} $Carlo{" "}
              </div>

              <div class="stat-desc text-accent">
                {" "}
                xCarlo Shares {(Number(stakedBalance?.data) * 1e-18).toFixed(3)}{" "}
              </div>
            </div>
            <div className="flex flex-row">
              <label
                className="cursor-pointer border-2"
                onClick={() => {
                  setXFcknBalance(floor10(Number(stakedBalance.data) || 0, 10) * 1e-18);
                  console.log("max", floor10(Number(stakedBalance.data) || 0, 3) * 1e-18);
                }}
              >
                MAX
              </label>
              <input
                className="border-2 text-accent"
                placeholder="$Carlo"
                value={xFcknBalance}
                type="number"
                onChange={e => setXFcknBalance(Number(e.target.value))}
              />
            </div>
            <Tippy className="relative" content={<span>unWrap $Carlo</span>}>
              <button className="btn btn-primary" onClick={handleUnstakeFunction} disabled={isUnstakePending}>
                {isUnstakePending ? <span className="loading loading-spinner loading-sm"></span> : "Withdraw"}
              </button>
            </Tippy>
          </div>
        );

      default:
        return <div>default</div>;
    }
  };

  return (
    <>
      <Tippy className="relative top-12" content={<span>View $CARLO Staking</span>}>
        <div
          onClick={() => setModalIsOpen(true)}
          className="cursor-pointer bg-[url(/profile.png)] hover:bg-[url(/Vomiting.png)] bg-contain bg-no-repeat relative h-full w-full top-0 left-0"
        >
          <span className="absolute bottom-0  sm:left-52 md:left-80 font-twist text-2xl text-white">Staking</span>
        </div>
      </Tippy>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Exercise Completed"
        style={modalStyles}
      >
        <div class="card w-full  h-full bg-base-100 shadow-xl font-satoshi text-[#3029ff]">
          <span onClick={() => setModalIsOpen(false)} className="cursor-pointer absolute text-2xl font-twist right-4">
            X
          </span>
          <div class="card-body flex flex-col sm:flex-row">
            {functionRender()}

            <FarmEarnings farmName="xStakingPool" pricePerShare={Number(ppShare.data)} />
          </div>
          <span className="ml-6 text-sm">Tip: xCarlo farms compound automatically!</span>{" "}
          <div className="card-actions justify-end p-2">
            <div className="flex flex-row space-x-4">
              <Tippy className="relative" content={<span>Wrap $Carlo</span>}>
                <button
                  className="color-blue-500 border-e-rose-200 border-2 bg-contain bg-no-repeat h-[35px] w-[75px]"
                  onClick={() => {
                    setOptIndex(1);
                  }}
                >
                  Add
                </button>
              </Tippy>
              <Tippy className="relative" content={<span>Unwrap $Carlo</span>}>
                <button
                  className="color-blue-500 border-e-rose-200 border-2 bg-[url(/noLiquidity.png)] bg-contain bg-no-repeat h-[35px] w-[75px]"
                  onClick={() => {
                    setOptIndex(2);
                  }}
                >
                  Remove
                </button>
              </Tippy>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Staking;
