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
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="relative text-center font-satoshi -top-2">
          FARM FARM
          <Image src="/carlogo.png" alt="logo" className="flex justify-center items-center" width={300} height={300} />
        </h1>
        <div className="flex flex-row items-center">
          {/* <Image src="/sideEye.png" alt="logo" className="relative max-w-[50%] left-[50%] ml-[25%] mt-20" fill>
            <Link
              href="/farm"
              onClick={() => {
                console.log("clicked");
              }}
              className="absolute text-white p-2 rounded-lg cursor-pointer bottom-20 left-30 ml-52"
            >
              <Image
                src="/carloAnus.png"
                alt="Carlo anus"
                width={50}
                height={30}
              />
            </Link>
          </Image> */}
          <div className="relative max-w-[50%] ">
            <Image
              src="/sideEye.png"
              alt="logo"
              width={600}
              height={350}
              className="relative mt-[-20%]"
              layout="responsive" //I am using layout that it's a legacy thing, I have to change it, but like that it works
            />
            <Link
              href="/farm"
              onClick={() => {
                console.log("clicked");
              }}
              className="absolute mt-[-26%] ml-[36.15%] width-[10px] z-10 block"
            >
              <Image
                src="/carloAnus.png"
                alt="Carlo anus"
                width={5}
                height={5}
                className={`max-w-[10%] ${clicked ? "no-hover" : "pulse"}`}
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
