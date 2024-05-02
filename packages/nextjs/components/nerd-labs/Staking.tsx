import React, { useState, useEffect } from "react";
import FarmEarnings from "./FarmEarnings";
import FarmApprove from "./farmApprove";
import Tippy from "@tippyjs/react";
import Modal from "react-modal";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

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
          <>
            <span className="text-2xl font-twist">STAKING</span>
            <span className="text-sm">$Carlo Balance: {(Number(balance?.data) * 1e-18).toFixed(3)} $Carlo</span>

            <span className="text-sm">
              $xCarlo Balance: {(Number(ppShare.data) * 1e-18 * (Number(stakedBalance.data) * 1e-18)).toFixed(3)} $Carlo{" "}
            </span>
            <div className="flex flex-row">
              <label
                className="cursor-pointer border-2"
                onClick={() => setFcknBalance(Number(balance.data) * 1e-18 || 0)}
              >
                MAX
              </label>
              <input
                className="border-2"
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
          </>
        );
      case "withdraw":
        return (
          <>
            <span className="text-2xl font-twist">UNSTAKING</span>
            <span className="text-sm">$Carlo Balance: {(Number(balance.data) * 1e-18).toFixed(3)} $Carlo</span>
            <span className="text-sm"> $xCarlo Balance: {(Number(stakedBalance.data) * 1e-18).toFixed(3)} $Carlo</span>

            <div className="flex flex-row">
              {" "}
              <label
                onClick={() => setXFcknBalance(Number(stakedBalance.data) * 1e-18 || 0)}
                className="cursor-pointer border-2"
              >
                MAX
              </label>{" "}
              <input
                className="border-2"
                placeholder="$xCarlo Balance"
                value={Number(xFcknBalance)}
                type="number"
                onChange={e => setXFcknBalance(Number(e.target.value))}
              />
            </div>

            <Tippy className="relative" content={<span>unWrap $Carlo</span>}>
              <button className="btn btn-primary" onClick={handleUnstakeFunction} disabled={isUnstakePending}>
                {isUnstakePending ? <span className="loading loading-spinner loading-sm"></span> : "Withdraw"}
              </button>
            </Tippy>
          </>
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
        />
      </Tippy>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Exercise Completed"
        style={modalStyles}
      >
        <div class="card w-96 bg-base-100 shadow-xl font-satoshi text-[#3029ff]">
          <div class="card-body">{functionRender()}</div>
          <br />

          <FarmEarnings address={stakingPool} />
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
