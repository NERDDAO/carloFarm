

import FarmEarnings from "./FarmEarnings";
import FarmApprove from "./FarmApprove";
import Modal from "react-modal";

import Tippy from '@tippyjs/react';
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth"
import { useAccount } from "wagmi"
const Staking = () => {
    //const maxAmount = ethers.MaxUint256;

    const account = useAccount();
    const stakingPool = "0x7de38e45A074fBa05053801Bd3a66f3C8C155d31"
        const [isUnstake, setIsUnstake] = useState(false);
        const [modalIsOpen, setModalIsOpen] = useState(false);
        //const [modal2IsOpen, setModal2IsOpen] = useState(false);
        const [optIndex, setOptIndex] = useState(0);
        const [fcknBalance, setFcknBalance] = useState(0)
        const [xFcknBalance, setXFcknBalance] = useState(0)
        const approval = useScaffoldContractRead({
            contractName: "fcknToken",
            functionName: "allowance",
            args: [account.address, stakingPool]
        })
        const balance = useScaffoldContractRead({
            contractName: "fcknToken",
            functionName: "balanceOf",
            args: [account.address]
        })
        const stakedBalance = useScaffoldContractRead({
            contractName: "xStakingPool",
            functionName: "balanceOf",
            args: [account.address]
        })
        const ppShare = useScaffoldContractRead({
            contractName: "xStakingPool",
            functionName: "getPricePerFullShare",
        })

        const stake = useScaffoldContractWrite({
            contractName: "xStakingPool",
            functionName: "stake",
            args: [BigInt(fcknBalance * 1e18)]
        })

        const unstake = useScaffoldContractWrite({
            contractName: "xStakingPool",
            functionName: "withdraw",
            args: [BigInt(xFcknBalance * 1e18)]
        })

        useEffect(() => {
            if (Number(approval.data) > 0) {
                if (isUnstake === true) {
                    setOptIndex(1);
                    console.log("Unstaking");
                    return
                }
                setOptIndex(0);
                return
            }
            setOptIndex(2);

        }, [isUnstake, modalIsOpen]);

        const optts = ["deposit", "withdraw", "approve"];


        const functionRender = () => {

            switch (optts[optIndex]) {
                case "deposit":
                    return <>
                        <strong>$FCKN 🍗 Staking</strong>
                        <span className="text-sm">$FCKN 🍗 Balance:  {(Number(balance?.data) * 1e-18).toFixed(3)} $FCKN</span>

                        <span className="text-sm">Staked $FCKN 🍗 Balance: {((Number(ppShare.data) * 1e-18) * (Number(stakedBalance.data) * 1e-18)).toFixed(3)} $FCKN </span>
                        <label className="cursor-pointer" onClick={() => setFcknBalance(Number(balance.data) * 1e-18 || 0)}>max</label><input className="border-2" placeholder="$FCKN %🍗" value={fcknBalance} type="number" onChange={e => setFcknBalance(Number(e.target.value))} />
                        <Tippy className="relative" content={<span>$FCKN  🍗 STAKE</span>}>
                            <button className="border-e-rose-200 border-2 bg-[url(/chicken.png)] bg-contain bg-no-repeat h-[75px] w-[75px]" onClick={() => { stake.write(); setModalIsOpen(false) }} />
                        </Tippy>
                        <Tippy className="relative" content={<span>$FCKN  🍗 TOGGLE</span>}>
                            <button className="bg-[url(/noChicken.png)] bg-contain bg-no-repeat h-[75px] w-[75px]" onClick={() => { setIsUnstake(true) }} />
                        </Tippy>
                        <FarmEarnings />

                    </>
                case "withdraw":
                    return <>
                        <strong>$FCKN 🍗 unStaking</strong>
                        <span className="text-sm">$FCKN 🍗 Balance:  {(Number(balance.data) * 1e-18).toFixed(3)} $FCKN</span>
                        <span className="text-sm"> Staked $FCKN 🍗 Balance: {(Number(stakedBalance.data) * 1e-18).toFixed(3)} $FCKN </span>
                        <label onClick={() => setXFcknBalance(Number(stakedBalance.data) * 1e-18 || 0)} className="cursor-pointer" >max</label> <input className="border-2" placeholder="$xFCKN Balance" value={Number(xFcknBalance)} type="number" onChange={e => setXFcknBalance(Number(e.target.value))} />
                        <Tippy className="relative" content={<span>$FCKN  🍗 WITHDRAW</span>}>

                            <button className="border-e-rose-200 border-2 bg-[url(/noChicken.png)] bg-contain bg-no-repeat h-[75px] w-[75px]" onClick={() => { unstake.write(); setModalIsOpen(false) }} />
                        </Tippy>
                        <Tippy className="relative" content={<span>$FCKN  🍗 TOGGLE</span>}>
                            <button className="bg-[url(/chicken.png)] bg-contain bg-no-repeat h-[75px] w-[75px]" onClick={() => { setIsUnstake(false) }} />
                        </Tippy>
                    </>

                case "approve":
                    return <FarmApprove />
                default:
                    return <div>default</div>
            }
        }



        return (

            <>
                <Tippy className="relative -left-24" content={<span>View $FCKN 🍗 Staking</span>}>
                    <div onClick={() => setModalIsOpen(true)} className="bg-[url(/chicken.png)] bg-contain bg-no-repeat relative md:scale-90 sm:scale-90 h-[50%] w-[30%] top-1/3 sm:ml-16 sm:-mt-4 md:-mt-4 left-34 md:ml-32 lg:ml-24 lg:-mt-8 2xl:-mt-12  xl:ml-36 2xl:ml-52 cursor-pointer transform origin-bottom hover:scale-110" /></Tippy>




                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    contentLabel="Exercise Completed"
                    style={modalStyles}
                >
                    <div className="flex flex-col bg-transparent -backdrop-hue-rotate-30 align-baseline snap-center items-center space-y-2">


                        {functionRender()}
                    </div>
                </Modal>
            </>
        );
    }

export default Staking;
