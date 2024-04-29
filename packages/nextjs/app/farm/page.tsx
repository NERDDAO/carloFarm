"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Farm: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 font-body">
        <h1 className="text-center">
          <Image src="/carlogo.png" alt="logo" className="flex justify-center items-center" width={300} height={300} />
          FARM CARLO
        </h1>
        <div className="flex flex-row items-center">
          <Image src="/profile.png" alt="logo" className="relative max-w-[50%] " fill />

          <Image src="/iprofile.png" alt="logo" className="relative max-w-[50%] left-1/2 top-0 ml-[50%]" fill />
        </div>
      </div>
    </>
  );
};

export default Farm;
