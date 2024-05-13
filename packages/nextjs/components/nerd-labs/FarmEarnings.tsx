import React, { useEffect, useState } from "react";
import externalContracts from "../../contracts/externalContracts";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

function FarmEarnings(props: { farmName: string; pricePerShare: number }) {
  const [lastRewardAmount, setLastRewardAmount] = useState<string | null>(null);
  const [totalSupply, setTotalSupply] = useState<string | null>(null);
  const [monthlyInterest, setMonthlyInterest] = useState<number | null>(null);
  const { farmName, pricePerShare } = props;
  // Read the lastRewardAmount from the contract
  const { data: lastRewardAmountData } = useScaffoldReadContract({
    contractName: farmName,
    functionName: "lastRewardAmount",
  });

  // Read the totalSupply from the contract
  const { data: totalSupplyData } = useScaffoldReadContract({
    contractName: farmName,
    functionName: "totalSupply",
  });

  console.log(farmName, lastRewardAmountData, totalSupplyData);

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
      const totalSupplyNum = Number(totalSupply) * pricePerShare;

      // Calculate monthly interest in tokens per staked token
      const interestPerToken = (rewardAmountNum / totalSupplyNum) * 100;
      setMonthlyInterest(interestPerToken);
    }
  }, [lastRewardAmount, totalSupply]);

  return (
    <div className="font-satoshi text-[#3029ff] card p-4">
      <h1 className="text-2xl font-twist">Contract Stats</h1>
      <div class="stats">
        <div class="stat-title text-accent"> Total Supply Staked:</div>
        <div className="stat-value">
          {totalSupply ? (Number(totalSupply) * 1e-18 * pricePerShare * 1e-18).toFixed(2) : null}
        </div>
        <div class="stat-title text-accent">Monthly Interest per Token:</div>
        <div className="stat-value">{monthlyInterest ? (monthlyInterest * 1e18).toFixed(3) : null}%</div>
        <div class="stat-desc text-accent"> NO lockup period or penalties</div>

        <div class="stat-desc text-accent"> Stake and Unstake anytime</div>
      </div>
      <p></p>
      <p> </p>
      <a
        className="text-xs text-blue-500"
        href="https://basescan.org/token/0x6901d3A45dc3e4E79f5eDd60ABE57C35feBB8005"
        target="_blank"
      >
        View in BaseScan
      </a>
    </div>
  );
}

export default FarmEarnings;
