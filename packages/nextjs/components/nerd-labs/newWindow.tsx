"use client";

import React from "react";
import { useEffect, useState } from "react";
// optional
import WinBox from "react-winbox";
// required
import "winbox/dist/css/themes/modern.min.css";
// optional
import "winbox/dist/css/themes/white.min.css";
import "winbox/dist/css/winbox.min.css";

const OsWindow = ({
  title,
  initPosition,
  initSize,
  children,
}: {
  title: string;
  initPosition: { x: number; y: number };
  initSize: { width: number; height: number };
  children: React.ReactNode;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: initPosition.x, y: initPosition.y });
  const [size, setSize] = useState({ width: initSize.width, height: initSize.height });
  const [initialClick, setInitialClick] = useState({ x: 0, y: 0 });

  const getWindowDimensions = () => {
    if (typeof window !== "undefined") {
      // setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    // Default dimensions if window is not defined (SSR)
    return { width: 0, height: 0 };
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [windowDimensionsOld, setWindowDimensionsOld] = useState(windowDimensions);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
      setPosition({
        x: position.x - (windowDimensionsOld.width - windowDimensions.width),
        y: position.y - (windowDimensionsOld.height - windowDimensions.height),
      });
      setWindowDimensionsOld(windowDimensions);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions.height, windowDimensions.width]);

  const handleMouseDown = (e: { clientX: number; clientY: number }) => {
    setIsDragging(true);
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseDownBorder = (e: { nativeEvent: { offsetX: any; offsetY: any }; clientX: any; clientY: any }) => {
    const { offsetX, offsetY } = e.nativeEvent;
    if (offsetX >= size.width - 10 && offsetY >= size.height - 10) {
      setIsResizing(true);
      setInitialClick({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMoveBorder = (e: { clientX: number; clientY: number }) => {
    if (isResizing) {
      const newWidth = size.width + e.clientX - initialClick.x;
      const newHeight = size.height + e.clientY - initialClick.y;
      setSize({ width: newWidth, height: newHeight });
      setInitialClick({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUpBorder = () => {
    setIsResizing(false);
  };

  return (
    <>
      <WinBox width={this?.state.boxWidth ?? 500} height={300} x="right" y="bottom" noClose={this?.state.inEditing}>
        <div
          className=".target w-192 h-160 bg-[#FEFEFE] border-2 border-[#3A4561] rounded-t-xl overflow-hidden image-rendering-pixelated image-rendering-crisp-edges pixel-top-corners "
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            width: size.width,
            height: size.height,
            cursor: isResizing ? "nwse-resize" : "default",
          }}
          //onMouseDown={handleMouseDownBorder}
          //onMouseMove={handleMouseMoveBorder}
          //onMouseUp={handleMouseUpBorder}
        >
          <div
            className="h-full border-2 border-[#708193] rounded-t-xl image-rendering-pixelated image-rendering-crisp-edges"
            //onMouseDown={handleMouseDown}
            //onMouseMove={handleMouseMove}
            //onMouseUp={handleMouseUp}
          >
            <div className="bg-[#EFEFEF] text-white px-3 py-1 flex justify-between items-center border-2 border-b-[#BBBBBB] rounded-t-xl">
              <div className="flex gap-2">
                <button className="flex justify-center items-center rounded-full w-3 h-3 bg-[#A95A56] text-black "></button>
                <button className="flex justify-center items-center rounded-full w-3 h-3 bg-[#E6C36F] text-black "></button>
                <button className="flex justify-center items-center rounded-full w-3 h-3 bg-[#9FCA7B] text-black "></button>
              </div>
              <div className="font-bold text-[#3E3E3E] vt323-regular">{title}</div>
              <div className="flex gap-2">
                <div className="w-6 h-3 border-2 border-[#ACACAC] rounded-md">
                  <button className="flex justify-center items-center w-5 h-2 bg-[#DADADA] text-black rounded-md"></button>
                </div>
              </div>
            </div>
            <div className="">{children}</div>
            <div className="absolute inset-0 shadow-md"></div>
          </div>
        </div>
      </WinBox>
    </>
  );
};

export default OsWindow;
