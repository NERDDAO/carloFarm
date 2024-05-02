import { useState } from "react";
import externalContracts from "../../contracts/externalContracts";
import { ethers } from "ethers";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth/";

interface Erc20FarmApproveProps {
  onApproveSuccess: () => void;
}

function Erc20FarmApprove({ onApproveSuccess }: Erc20FarmApproveProps) {
  const contractName = "fcknToken";
  const spender = externalContracts[8453].xStakingPool.address;
  const amount = ethers.MaxUint256;

  // Adjusted to match the expected hook usage
  const { writeContractAsync, isMining } = useScaffoldWriteContract(contractName);

  const handleApprove = async () => {
    // Constructing the variables parameter correctly
    const variables = {
      functionName: "approve" as const, // Explicitly typing as a literal type
      args: [spender as string, amount] as const,
    };

    if (writeContractAsync) {
      await writeContractAsync(variables);
      onApproveSuccess();
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleApprove} disabled={isMining}>
      {isMining ? <span className="loading loading-spinner loading-sm"></span> : "Approve"}
    </button>
  );
}

export default Erc20FarmApprove;
