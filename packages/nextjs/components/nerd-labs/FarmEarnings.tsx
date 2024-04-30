import React, { useEffect, useState } from "react";
import externalContracts from "../../contracts/externalContracts";
import { useContractRead } from "wagmi";

function FarmEarnings() {
  const [lastRewardAmount, setLastRewardAmount] = useState<string | null>(null);
  const [totalSupply, setTotalSupply] = useState<string | null>(null);
  const [monthlyInterest, setMonthlyInterest] = useState<number | null>(null);

  // Read the lastRewardAmount from the contract
  const { data: lastRewardAmountData } = useContractRead({
    address: externalContracts[8453].xStakingPool.address,
    abi: externalContracts[8453].xStakingPool.abi,
    functionName: "lastRewardAmount",
  });

  // Read the totalSupply from the contract
  const { data: totalSupplyData } = useContractRead({
    address: externalContracts[8453].xStakingPool.address,
    abi: externalContracts[8453].xStakingPool.abi,
    functionName: "totalSupply",
  });

  useEffect(() => {
    if (lastRewardAmountData) {
      setLastRewardAmount(lastRewardAmountData.toString());
    }
    if (totalSupplyData) {
      setTotalSupply(totalSupplyData.toString());
    }
  }, [lastRewardAmountData, totalSupplyData]);

  useEffect(() => {
    if (lastRewardAmount && totalSupply) {
      // Convert string representations to numbers for calculation
      const rewardAmountNum = Number(lastRewardAmount);
      const totalSupplyNum = Number(totalSupply);

      // Calculate monthly interest in tokens per staked token
      const interestPerToken = rewardAmountNum / totalSupplyNum;
      setMonthlyInterest(interestPerToken);
    }
  }, [lastRewardAmount, totalSupply]);

  return (
    <div style={{ color: "#ff00ff", display: "inline-table" }}>
      <h3>Contract Stats</h3>
      <p>Total Supply Staked: {totalSupply ? (Number(totalSupply) / 10 ** 18).toFixed(2) : null}</p>
      <p>Monthly Interest per Token: {monthlyInterest ? (monthlyInterest * 10 ** 18 * 100).toFixed(6) : null}%</p>
    </div>
  );
}

export default FarmEarnings;
