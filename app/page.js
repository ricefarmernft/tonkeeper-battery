"use client";
import Battery from "./components/battery";
import Logo from "./components/Logo";
import HowItWorks from "./components/howItWorks";
import TonkeeperBatteryUsage from "./components/tonkeeperBatteryUsage";
import BatteryTypewriter from "./components/batteryTypewriter";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center p-4 pt-12">
        <div className="flex flex-col justify-center text-center">
          <div className="flex justify-center">
            <Logo />
            <div className="text-5xl font-bold pl-1">Tonkeeper</div>
          </div>

          <div className="text-5xl font-semibold text-green-400 min-h-[48px]">
            <BatteryTypewriter />
          </div>
        </div>
      </div>
      <div className="pt-6">
        <Battery />
      </div>
      {/* What is Battery */}
      <div className="unit-container">
        <div className="text-2xl font-semibold p-2 flex justify-center">
          What is Tonkeeper Battery?
        </div>
        <div className="text-base font-medium p-2 px-5">
          Tonkeeper Battery is a simple way to pay for transactions on the TON
          blockchain. Instead of needing native coins (TON) to interact with the
          network, you can instead use your bank card or stablecoins.
        </div>
        <div className="text-xl font-medium p-2 px-5">Features</div>
        <ol className="list-decimal list-inside pb-2 px-5">
          <li>Gasless payments</li>
          <li>Token swaps</li>
          <li>NFT transfers</li>
          <li>Funding with in-app purchases or crypto</li>
        </ol>
      </div>
      {/* How it works */}
      <HowItWorks />
      {/* Battery Usage */}
      <TonkeeperBatteryUsage />
    </>
  );
}
