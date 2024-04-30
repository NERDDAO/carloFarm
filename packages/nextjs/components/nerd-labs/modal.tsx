"use client";

import React, { useEffect, useState } from "react";
import LiqStaking from "./LiqStaking.tsx";
import Staking from "./Staking.tsx";
import Tippy from "@tippyjs/react";
import Player from "YtPlayer.tsx";
import type { NextPage } from "next";
// optional
import Modal from "react-modal";
import "tippy.js/dist/tippy.css";

const FarmModal: NextPage = () => {
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

  // Render function for Prismic headless CMS pages
  function Content(this: any) {
    const [modalIsOpen, setModalIsOpen] = React.useState(true);

    return (
      <div className="p-6">
        <Player />

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Exercise Completed"
          style={modalStyles}
        >
          <div className="flex flex-col items-center text-justify">
            <h3>
              Welcome to the... <br />
              <strong className="underline-offset-1 underline text-xl">
                FRIED CHICKEN $FCKN 🍗
                <br /> Farm to table Experience
              </strong>
            </h3>
            <p className="text-center">
              Indulge in the ULTIMATE <strong>$FCKN 🍗</strong> yield farming frenzy.
              <br />
              COMMUNITY LED<strong className="underline-offset-1 underline"> FARM FACTORY</strong>
              <br />
              <strong className="underline-offset-1 underline">HIGH APR POOLS</strong>, <br />
              Pair your <strong className="underline-offset-1 underline">$DEGEN </strong>
              tokens with our <br />
              <strong className="underline-offset-1 underline">RUG-PULL PROOF </strong>
              liquidity pools! <br />
              New adrenaline-pumping opportunities
              <br /> every <strong className="underline-offset-1 underline">$FCKN 🍗 Friday</strong>
            </p>
            <button
              className="btn"
              onClick={() => {
                setModalIsOpen(false);
              }}
            >
              Enjoy
            </button>{" "}
          </div>
        </Modal>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto h-[100%] w-[100%] absolute align-center left-1/4 md:-ml-8 lg:ml-24 xl:-ml-6 2xl:-ml-16 bg-[url(/fcknBg.png)] bg-no-repeat bg-contain overflow-clip">
        <Staking />
        <LiqStaking />

        <a
          className=""
          href="https://app.uniswap.org/swap?outputcurrency=0x7d12aeb5d96d221071d176980d23c213d88d9998&chain=base"
          target="_blank"
        >
          <Tippy content={<span>Buy $FCKN 🍗</span>}>
            <div className="bg-[url(/shaker.png)] bg-contain bg-no-repeat relative -top-1/3 sm:-mt-12 sm:-ml-32 md:-mt-10 lg:-mt-16 lg:-ml-16 2xl:-mt-12 md:-ml-32 2xl:ml-4 left-52 h-1/4 w-32 cursor-pointer transform origin-bottom-left hover:scale-110" />
          </Tippy>
        </a>

        <a
          href="https://app.uniswap.org/swap?outputcurrency=0x7d12aeb5d96d221071d176980d23c213d88d9998&chain=base"
          target="_blank"
        >
          <Tippy className="" content={<span>Add $FCKN 🍗 Liquidity</span>}>
            <div className="bg-[url(/shaker.png)] bg-contain bg-no-repeat relative -top-2/3 lg:mt-16  md:mt-12 left-32 h-1/4 w-32 md:-ml-20 2xl:-ml-6 cursor-pointer transform origin-bottom-left hover:scale-110" />
          </Tippy>
        </a>
      </div>
      <Content />
    </>
  );
};

export default FarmModal;
