"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 font-satoshi text-[#3029ff] container mx-auto ">
        <h1 className="relative text-center  -top-2">
          <Image src="/carlogo.png" alt="logo" className="flex justify-center items-center" width={300} height={300} />
        </h1>
        <div className="flex flex-row items-center">
          <div className="relative">
            <Image
              src="/sideEye.png"
              alt="logo"
              width={600}
              height={350}
              className="relative mt-[-0%]"
              layout="responsive" //I am using layout that it's a legacy thing, I have to change it, but like that it works
            />
            <Link
              href="/farm"
              onClick={() => {
                console.log("clicked");
              }}
              className="absolute mt-[-25.5%] ml-[36.50%] width-[10px] z-10 block"
            >
              <Image
                src="/carloAnus.png"
                alt="Carlo anus"
                width={5}
                height={5}
                className={`max-w-[20%] ${clicked ? "no-hover" : "pulse"}`}
                onClick={handleClick}
                layout="responsive" //I am using layout that it's a legacy thing, I have to change it, but like that it works
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
