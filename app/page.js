"use client";
import Battery from "./components/battery";
import Logo from "./components/Logo";
import HowItWorks from "./components/howItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center p-4">
        <div className="flex flex-col justify-center text-center">
          <div className="flex justify-center">
            <Logo />
            <div className="text-5xl font-bold pl-1">Tonkeeper</div>
          </div>
          <div className="text-5xl font-bold text-green-400">Battery</div>
        </div>
      </div>
      <div className="py-6">
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
      <div className="unit-container">
        <div className="text-2xl font-semibold p-2 flex justify-center">
          Tonkeeper Battery Usage
        </div>
        <ol className="list-decimal list-inside p-2 px-5">
          <li>
            To view your battery usage, click on the battery icon from the main
            wallet screen
          </li>
          <div className="p-4 flex justify-center">
            <Image src={"/images/5.jpg"} width={400} height={600} />
          </div>
          <li>
            Here you can view how many charges your battery is supplied with
          </li>
          <div className="p-4 flex justify-center">
            <Image src={"/images/6.jpg"} width={400} height={600} />
          </div>
          <li>
            By clicking on "Battery Settings", you can see battery charges can
            be used for 3 types of transactions: Swaps, NFT Transfers, and Token
            Transfers as well as their corresponding costs. You can enable or
            disable the usage of charges for these transactions
          </li>
          <div className="p-4 flex justify-center">
            <Image src={"/images/7.jpg"} width={400} height={600} />
          </div>
          <li>
            For more information, please refer to the{" "}
            <a
              href="https://tonkeeper.helpscoutdocs.com/article/88-what-is-a-battery-and-what-is-it-used-for"
              target="_blank"
              className="link"
            >
              Tonkeeper Battery FAQ
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
