"use client";
import Header from "@/components/header/header";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <div>
          <Header />
        </div>
      </NextUIProvider>
    </>
  );
}
