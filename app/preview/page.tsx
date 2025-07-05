"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

export default function PreviewPage() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-white font-poppins text-black min-h-[80vh]">
      {/* Grid Background */}
      <div
        className="
          absolute inset-0 z-0
          [background-size:40px_40px]
          [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
          pointer-events-none
        "
        aria-hidden="true"
      />
      {/* Main Content */}
      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-black font-poppins text-center">
              Perfect Analysis <br />
              <span className="text-2xl sm:text-4xl md:text-[6rem] font-bold mt-1 leading-none font-poppins block">
                For Perfect Results
              </span>
            </h1>
          }
        >
          <img
            src={`/icons/image.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-xl sm:rounded-2xl object-cover w-full max-w-full h-56 sm:h-96 md:h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}
