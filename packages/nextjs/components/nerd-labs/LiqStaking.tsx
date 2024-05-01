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
      name: "$Carlo/$WETH",
      address: "0x3FdC7fEf77208Aaac44E81bA982a9855642411D2",
      poolName: "wethStakingPool",
      pool: "0x53f64cde28dd3caef17e701593b4ad7a95f0f61c",
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
            </div>
          </div>
        );
      case "deposit":
        return (
          <>
            <strong>$Carlo LP Farming</strong>
            <span className="text-sm">
              Balance: {(Number(balance?.data) * 1e-18).toFixed(3)} {currentFarm.name}{" "}
            </span>

            <label className="cursor-pointer" onClick={() => setFcknBalance(Number(balance.data) * 1e-18 || 0)}>
              max
            </label>
            <input
              className="border-2"
              placeholder="$Carlo Balance"
              value={fcknBalance}
              type="number"
              onChange={e => setFcknBalance(Number(e.target.value))}
            />

            <Tippy className="relative" content={<span>STAKE</span>}>
              <button
                className="border-e-rose-200 border-2 bg-[url(/chicken.png)] bg-contain bg-no-repeat h-[75px] w-[75px]"
                onClick={() => {
                  stake.write();
                  setModalIsOpen(false);
                }}
              />
            </Tippy>
          </>
        );
      case "withdraw":
        return (
          <>
            <strong>$FCKN 🍗 unStaking</strong>
            <span className="text-sm">$Carlo Balance: {(Number(balance.data) * 10e-18).toFixed(3)} $FCKN</span>

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
            <Tippy className="relative" content={<span> WITHDRAW</span>}>
              <button
                className="border-e-rose-200 border-2 bg-[url(/noLiquidity.png)] bg-contain bg-no-repeat h-[75px] w-[75px]"
                onClick={() => {
                  unstake.write();
                  setModalIsOpen(false);
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
        <div class="card w-96 bg-base-100 shadow-xl">
          <strong className="card-title">$Carlo LP Farming</strong>
          <div class="card-body">{liquidityFunctionRender()}</div>
          <br />
          balance: {(Number(balance.data) * 1e-18).toFixed(3)} {currentFarm.name}
          <br />
          Earned: {(Number(earned.data) * 1e-18).toFixed(3)} $Carlo
          <br />
          <span className="text-sm">
            {" "}
            Staked $Carlo LP Balance: {(Number(stakedBalance.data) * 10e-18).toFixed(3)} $Carlo{" "}
          </span>
          <p className="flex flex-row ">
            Options:{" "}
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
          <a className="text-xs text-blue-500" href={`https://basescan.org/token/${currentFarm.pool}`} target="_blank">
            View in BaseScan
          </a>
          <div className="card-actions justify-end">
            {" "}
            {Number(stakedBalance.data) !== 0 && (
              <Tippy className="relative" content={<span>Claim $Carlo</span>}>
                <button
                  className="color-blue-500 border-e-rose-200 border-2 bg-[url(/liquidity.png)] bg-contain bg-no-repeat h-[75px] w-[50px]"
                  onClick={() => {
                    claim.write();
                  }}
                />
              </Tippy>
            )}
            <div className="flex flex-row space-x-4">
              <Tippy className="relative" content={<span>Stake $Carlo</span>}>
                <button
                  className="color-blue-500 border-e-rose-200 border-2 bg-[url(/addLiquidity.png)] bg-contain bg-no-repeat h-[75px] w-[75px]"
                  onClick={() => {
                    setOptIndex(1);
                  }}
                />
              </Tippy>
              <Tippy className="relative" content={<span>Withdraw $Carlo Liquidity</span>}>
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
      </Modal>
    </>
  );
};

export default LiqStaking;
