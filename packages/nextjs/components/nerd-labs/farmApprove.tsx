import { ethers } from "ethers";
import { useContractWrite } from "wagmi";
import externalContracts from "~~/contracts/externalContracts";

function FarmApprove() {
  const spender = externalContracts[8453].xStakingPool.address;
  const amount = ethers.MaxUint256.toString();

  const { writeAsync } = useContractWrite({
    address: externalContracts[8453].fcknToken.address,
    abi: externalContracts[8453].fcknToken.abi,
    functionName: "approve",
    args: [spender, BigInt(amount)],
  });

  const handleApprove = async () => {
    if (writeAsync) {
      await writeAsync();
    }
  };

  return <button onClick={handleApprove}>Just $FCKN Approve</button>;
}

export default FarmApprove;
