"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
//import React, { useEffect, useState } from 'react';
import Tippy from "@tippyjs/react";
import type { NextPage } from "next";
// optional
import Modal from "react-modal";
import "tippy.js/dist/tippy.css";
import LiqStaking from "~~/components/nerd-labs/LiqStaking";
import Staking from "~~/components/nerd-labs/Staking";

const Farm: NextPage = () => {
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function Content(this: any) {
    const [modalIsOpen, setModalIsOpen] = React.useState(true);

    return (
      <div className="p-6">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Exercise Completed"
          style={modalStyles}
        >
          <div className="flex flex-col items-center text-justify">
            <h3>
              Welcome... <br />
              <span className="underline-offset-1 underline text-2xl font-twist">
                CARLO LP FARM
                <br />
              </span>
            </h3>
            <p className="text-center font-satoshi">
              Dive into the ULTIMATE <strong>$Carlo</strong>
              <br /> yield farming experience. <br />
              <strong className="underline-offset-1 underline">MONTHLY HIGH APR POOLS</strong>, <br />
              Select between Single and LP staking!
              <li>
                xCarlo: Instantly accumulate rewards with no slippage
                <br />
              </li>
              <li>
                CARLO/WETH: Stake your LP tokens and earn $Carlo <br />
              </li>
              <br />
              <span className="underline-offset-1 underline text-2xl font-twist">
                FARM INFO
                <br />
              </span>
              <ul className="">
                <li>
                  Pool Yield:1,000,000 $Carlo/Month <br />
                </li>
                <li>
                  Period Ending: block 1717893187 <br />
                </li>
                <strong>
                  <li>
                    NO lockup period or penalties
                    <br />
                  </li>
                  <li>
                    Stake and Unstake anytime
                    <br />
                  </li>
                </strong>
              </ul>
            </p>
            <Links />
          </div>
        </Modal>
      </div>
    );
  }

  const Links = () => {
    return (
      <div className="flex flex-row">
        <a
          className=""
          href="https://app.uniswap.org/swap?outputcurrency=0x38d513Ec43ddA20f323f26c7bef74c5cF80b6477&chain=base"
          target="_blank"
        >
          <Tippy content={<span>Buy Carlo</span>}>
            <div className="btn">Swap</div>
          </Tippy>
        </a>

        <a href="https://app.uniswap.org/add/v2/ETH/0x38d513Ec43ddA20f323f26c7bef74c5cF80b6477" target="_blank">
          <Tippy className="" content={<span>Add Carlo Liquidity</span>}>
            <div className="btn">Pool</div>
          </Tippy>
        </a>
      </div>
    );
  };

  return (
    <div className="flex flex-col top-0 left-0 justify-center items-center content-center font-satoshi text-[#3029ff]">
      <h1 className="text-center">
        <Image src="/carlogo.png" alt="logo" className="" width={300} height={300} />
      </h1>

      <div className="font-satoshi text-[#3029ff] absolute top-24 left-8 transform h-[100%] w-[100%] flex flex-col sm:flex-row">
        <Staking />
        <LiqStaking />
        <Content />
      </div>
    </div>
  );
};

export default Farm;
