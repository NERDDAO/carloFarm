export type FarmProps = {
  name: "$FCKN/$WETH" | "$FCKN/$DEGEN";
  address: string;
  pool: string;
  poolName: "wethStakingPool" | "degenStakingPool";
};
