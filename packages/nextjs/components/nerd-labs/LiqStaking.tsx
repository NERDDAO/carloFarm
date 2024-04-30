//import FarmEarnings from "./FarmEarnings";
//
import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import { ethers } from "ethers";
import Modal from "react-modal";
import { useAccount } from "wagmi";
import FarmApprove from "~~/components/nerd-labs/farmApprove";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const LiqStaking = () => {
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const maxAmount = ethers.MaxUint256;

  const account = useAccount();
  const farmList: FarmProps[] = [
    {
      name: "$FCKN/$WETH",
      address: "0x9c449D92b6Fcb8285b8175B8f9C5dc00F05B797C",
      poolName: "wethStakingPool",
      pool: "0x8B7246d22dFE2f8e5F09e466f5f98f2f62DD52b6",
    },
    {
      name: "$FCKN/$DEGEN",
      address: "0x0b1174Bdf13057B7b31D7a3cb5EEe186F33b4107",
      poolName: "degenStakingPool",
      pool: "0xcF9ccEF568228831CBed0C5b5fB961Ba70e833F1",
    },
  ];
  const [farmIndex, setFarmIndex] = useState(0);
  const currentFarm = farmList[farmIndex];
  //const [isUnstake, setIsUnstake] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [optIndex, setOptIndex] = useState(0);
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
  const claim = useScaffoldWriteContract({
    contractName: currentFarm.poolName,
    functionName: "getReward",
  });
  const stake = useScaffoldWriteContract({
    contractName: currentFarm.poolName,
    functionName: "stake",
    args: [BigInt(fcknBalance * 1e18)],
  });
  const approve = useScaffoldWriteContract({
    contractName: currentFarm.name,
    functionName: "approve",
    args: [currentFarm.pool, maxAmount],
  });

  const unstake = useScaffoldWriteContract({
    contractName: currentFarm.poolName,
    functionName: "withdraw",
    args: [BigInt(xFcknBalance * 1e18)],
  });

  useEffect(() => {
    if (!currentFarm) return;
    balance.refetch();
    stakedBalance.refetch();
    approval.refetch();
    earned.refetch();
  }, [currentFarm, account.address]);

  const optts = ["selector", "deposit", "withdraw", "approve"];

  const liquidityFunctionRender = () => {
    switch (optts[optIndex]) {
      case "selector":
        return (
          <div className="flex flex-row">
            <div className="flex flex-col items-center space-y-2 ">
              <strong>$FCKN 🍗 Liquidity Staking</strong>
              <p className="flex flex-row ">
                farms:
                {farmList.map((farm, index) => {
                  return (
                    <button className="border-e-emerald-200 border-2" key={index} onClick={() => setFarmIndex(index)}>
                      {" "}
                      {farm.name}
                    </button>
                  );
                })}
              </p>
              Selected Farm: <strong>{currentFarm.name}</strong>
              <br />
              balance: {(Number(balance.data) * 1e-18).toFixed(3)} {currentFarm.name}
              <br />
              Earned: {(Number(earned.data) * 1e-18).toFixed(3)} $FCKN 🍗 🍗
              <br />
              <a
                className="text-xs text-blue-500"
                href={`https://basescan.org/token/${currentFarm.pool}`}
                target="_blank"
              >
                View in BaseScan
              </a>
              {Number(stakedBalance.data) !== 0 && (
                <Tippy className="relative" content={<span>Claim $FCKN 🍗 Tokens</span>}>
                  <button
                    className="color-blue-500 border-e-rose-200 border-2 bg-[url(/liquidity.png)] bg-contain bg-no-repeat h-[75px] w-[50px]"
                    onClick={() => {
                      claim.write();
                    }}
                  />
                </Tippy>
              )}
              {Number(approval.data) == 0 && (
                <Tippy className="relative" content={<span>Approve $FCKN 🍗 Tokens</span>}>
                  <button
                    className="color-blue-500 border-e-rose-200 border-2 bg-[url(/shaker.png)] bg-contain bg-no-repeat h-[75px] w-[50px]"
                    onClick={() => {
                      approve.write();
                    }}
                  />
                </Tippy>
              )}
              <div className="flex flex-row space-x-4">
                <Tippy className="relative" content={<span>Add $FCKN 🍗 Liquidity</span>}>
                  <button
                    className="color-blue-500 border-e-rose-200 border-2 bg-[url(/addLiquidity.png)] bg-contain bg-no-repeat h-[75px] w-[75px]"
                    onClick={() => {
                      setOptIndex(1);
                    }}
                  />
                </Tippy>
                <Tippy className="relative" content={<span>Withdraw $FCKN 🍗 Liquidity</span>}>
                  <button
                    className="color-blue-500 border-e-rose-200 border-2 bg-[url(/noLiquidity.png)] bg-contain bg-no-repeat h-[75px] w-[75px]"
                    onClick={() => {
                      setOptIndex(2);
                    }}
                  />
                </Tippy>
              </div>
            </div>
          </div>
        );
      case "deposit":
        return (
          <>
            <strong>$FCKN 🍗 Liquidity Staking</strong>
            <span className="text-sm">
              Balance: {(Number(balance?.data) * 1e-18).toFixed(3)} {currentFarm.name}{" "}
            </span>

            <label className="cursor-pointer" onClick={() => setFcknBalance(Number(balance.data) * 1e-18 || 0)}>
              max
            </label>
            <input
              className="border-2"
              placeholder="$FCKN 🍗 Balance"
              value={fcknBalance}
              type="number"
              onChange={e => setFcknBalance(Number(e.target.value))}
            />

            <Tippy className="relative" content={<span>$FCKN 🍗 STAKE</span>}>
              <button
                className="border-e-rose-200 border-2 bg-[url(/chicken.png)] bg-contain bg-no-repeat h-[75px] w-[75px]"
                onClick={() => {
                  stake.write();
                  setModalIsOpen(false);
                }}
              />
            </Tippy>

            <Tippy className="relative" content={<span>$FCKN 🍗 Farm Menu</span>}>
              <button
                className="color-blue-500 border-e-rose-200 border-2 bg-[url(/liquidity.png)] bg-contain bg-no-repeat h-[75px] w-[50px]"
                onClick={() => {
                  setOptIndex(0);
                }}
              />
            </Tippy>
          </>
        );
      case "withdraw":
        return (
          <>
            <strong>$FCKN 🍗 unStaking</strong>
            <span className="text-sm">$FCKN 🍗 Balance: {(Number(balance.data) * 10e-18).toFixed(3)} $FCKN</span>
            <span className="text-sm">
              {" "}
              Staked $FCKN 🍗 Balance: {(Number(stakedBalance.data) * 10e-18).toFixed(3)} $FCKN{" "}
            </span>
            <label onClick={() => setXFcknBalance(Number(stakedBalance.data) * 1e-18 || 0)} className="cursor-pointer">
              max
            </label>
            <input
              className="border-2"
              placeholder="$xFCKN Balance"
              value={xFcknBalance}
              type="number"
              onChange={e => setXFcknBalance(Number(e.target.value))}
            />
            <Tippy className="relative" content={<span>$FCKN 🍗 WITHDRAW</span>}>
              <button
                className="border-e-rose-200 border-2 bg-[url(/noLiquidity.png)] bg-contain bg-no-repeat h-[75px] w-[75px]"
                onClick={() => {
                  unstake.write();
                  setModalIsOpen(false);
                }}
              />
            </Tippy>
            <Tippy className="relative" content={<span>$FCKN 🍗 Farm Menu</span>}>
              <button
                className="color-blue-500 border-e-rose-200 border-2 bg-[url(/liquidity.png)] bg-contain bg-no-repeat h-[75px] w-[50px]"
                onClick={() => {
                  setOptIndex(0);
                }}
              />
            </Tippy>
          </>
        );

      case "approve":
        return <FarmApprove />;
      default:
        return <div>default{modalIsOpen}</div>;
    }
  };

  return (
    <>
      <Tippy className="relative" content={<span>View $FCKN 🍗 Liquidity Farms</span>}>
        <div
          onClick={() => setModal2IsOpen(true)}
          className="bg-[url(/iprofile.png)] bg-contain bg-no-repeat relative h-full w-full"
        />
      </Tippy>

      <Modal
        isOpen={modal2IsOpen}
        onRequestClose={() => setModal2IsOpen(false)}
        contentLabel="Exercise Completed"
        style={modalStyles}
      >
        <div className="relative flex flex-col bg-transparent -backdrop-hue-rotate-30 align-baseline snap-center items-center space-y-2">
          {liquidityFunctionRender()}
        </div>
      </Modal>
    </>
  );
};

export default LiqStaking;
