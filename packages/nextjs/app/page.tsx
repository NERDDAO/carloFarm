"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 ">
        <h1 className="relative text-center font-['Satoshi'] -top-2">
          FARM FARM
          <Image src="/carlogo.png" alt="logo" className="flex justify-center items-center" width={300} height={300} />
        </h1>
        <div className="flex flex-row items-center">
          <Image src="/sideEye.png" alt="logo" className="relative max-w-[50%] left-[50%] ml-[25%] mt-20" fill />

          <Link
            href="/farm"
            onClick={() => {
              console.log("clicked");
            }}
            className="absolute text-white p-2 w-[50px] h-[50px] rounded-lg cursor-pointer bottom-20 left-1/3 ml-52"
          ></Link>
        </div>
        FARM CARLO
      </div>
    </>
  );
};

export default Home;
