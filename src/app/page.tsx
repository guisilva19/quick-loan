"use client";
import FormLogin from "@/components/Login/Login";
import Image from "next/image";
import background from "../assets/background/background.svg";
import { NextUIProvider } from "@nextui-org/react";

export default function Login() {
  return (
    <>
      <NextUIProvider>
        <main className="w-screen h-screen flex justify-center items-center lg:bg-[#9377ef2b]">
          <div className="w-full flex justify-center xs:w-96 sm:shadow py-10 rounded-2xl lg:hidden animate-fade-down animate-once">
            <FormLogin />
          </div>
          <div className="hidden lg:flex w-[900px] h-5/6 shadow-2xl rounded-2xl bg-white animate-fade-down animate-once">
            <div className="w-6/12 flex to-[#9377EF] from-[#6e4ed6] bg-gradient-to-r justify-center items-center rounded-2xl">
              <FormLogin />
            </div>
            <div className="w-6/12 flex">
              <Image src={background} alt="icon" className="-mt-10" />
            </div>
          </div>
        </main>
      </NextUIProvider>
    </>
  );
}
