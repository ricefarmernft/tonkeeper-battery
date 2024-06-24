"use client";
import Battery from "./components/battery";
import Logo from "./components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center text-center p-4">
        <Logo />
        <div className="text-4xl font-bold">Tonkeeper Battery</div>
      </div>
      <div>
        <Battery />
      </div>
      <div className="text-2xl font-semibold p-2">
        What is Tonkeeper Battery?
      </div>
      <div className="text-base font-medium p-2 ">
        Tonkeeper Battery is a simple way to pay for transactions on the TON
        blockchain. Instead of needing native coins (TON) to interact with the
        network, you can instead use your bank card or stablecoins.
      </div>
      <div className="text-2xl font-semibold p-2">How does it work?</div>
      <ol className="list-decimal list-inside p-2">
        <li>
          Navigate to Tonkeeper on iOS or Android and update to version 4.3
        </li>
        <div className="p-4 flex justify-center">
          <Image src={"/images/1.jpg"} width={400} height={600} />
        </div>
        <li>Go to Settings {`->`} Battery (BETA)</li>
        <div className="p-4 flex justify-center">
          <Image src={"/images/2.jpg"} width={400} height={600} />
        </div>
        <li>Charge your battery with your banking card, TON, NOT, or USDT</li>
        <div className="p-4 flex justify-center">
          <Image src={"/images/3.jpg"} width={400} height={600} />
        </div>
        <li>
          Add balance to{" "}
          <a
            href="https://tonviewer.com/battery.ton"
            target="_blank"
            className="text-blue-300"
          >
            battery.ton
          </a>{" "}
          and slide to confirm
        </li>
        <div className="p-4 flex justify-center">
          <Image src={"/images/4.jpg"} width={400} height={600} />
        </div>
        <li>Your Tonkeeper Battery is now charged and will replace gas fees</li>
      </ol>
      <div className="text-2xl font-semibold p-2">Tonkeeper Battery Usage</div>
      <ol className="list-decimal list-inside p-2">
        <li>
          To view your battery usage, click on the battery icon from the main
          wallet screen
        </li>
        <div className="p-4 flex justify-center">
          <Image src={"/images/5.jpg"} width={400} height={600} />
        </div>
        <li>
          Here, you can view how many charges your battery is supplied with
        </li>
        <div className="p-4 flex justify-center">
          <Image src={"/images/6.jpg"} width={400} height={600} />
        </div>
        <li>
          By clicking on "Battery Settings", you can see battery charges can be
          used for 3 types of transactions: Swaps, NFT Transfers, and Token
          Transfers as well as their corresponding costs. You can also enable or
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
            className="text-blue-300"
          >
            Tonkeeper Battery FAQ
          </a>
        </li>
      </ol>
    </>
  );
}
