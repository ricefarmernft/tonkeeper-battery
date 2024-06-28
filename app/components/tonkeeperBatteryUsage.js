"use client";
import Image from "next/image";
import { useState } from "react";

const TonkeeperBatteryUsage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      text: "To view your battery usage, click on the battery icon from the main wallet screen",
      image: "/images/5.jpg",
    },
    {
      text: "Here you can view how many charges your battery is supplied with",
      image: "/images/6.jpg",
    },
    {
      text: "By clicking on 'Battery Settings', you can enable or disable charges for TON blockchain transactions",
      image: "/images/7.jpg",
    },
    {
      text: (
        <>
          For more information, please refer to the{" "}
          <a
            href="https://tonkeeper.helpscoutdocs.com/article/88-what-is-a-battery-and-what-is-it-used-for"
            target="_blank"
            className="link"
          >
            Tonkeeper Battery FAQ
          </a>
        </>
      ),
      image: "/images/8.jpg",
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleStepClick = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      {/* How it works */}
      <div className="unit-container">
        <div className="text-2xl lg:text-4xl font-semibold p-2 flex justify-center">
          Tonkeeper Battery Usage
        </div>
        <div className="p-2 px-5">
          <div className="flex items-center text-center ">
            <div className="flex flex-col items-center w-full">
              <div className=" min-h-[102px] md:min-h-[82px] lg:min-h-[88px] flex w-full justify-between items-start gap-4">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`${
                    currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                  } text-2xl arrow-btn`}
                >
                  &larr;
                </button>
                <div
                  className={`w-full text-start text-base lg:text-xl transition-opacity duration-300 ${
                    isAnimating ? "opacity-25" : "opacity-100"
                  }`}
                >
                  {`${currentStep + 1}. `}
                  {typeof steps[currentStep].text === "string"
                    ? steps[currentStep].text
                    : steps[currentStep].text}
                </div>
                <button
                  onClick={handleNext}
                  disabled={currentStep === steps.length - 1}
                  className={`${
                    currentStep === steps.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  } text-2xl arrow-btn`}
                >
                  &rarr;
                </button>
              </div>
              <div className="w-[280px] h-[560px] relative flex justify-center items-center bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
                {steps[currentStep].image && (
                  <div
                    className={`p-4 flex justify-center transition-opacity duration-300 ${
                      isAnimating ? "opacity-25" : "opacity-100"
                    }`}
                  >
                    <Image
                      src={steps[currentStep].image}
                      layout="fill"
                      alt="Tonkeeper Battery Steps"
                      className="rounded-3xl shadow-xl"
                    />
                  </div>
                )}
              </div>
              {/* Step Indicators */}
              <div className="flex gap-4 mt-4 items-center justify-center">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleStepClick(index)}
                    className={`step-btn w-4 h-4 rounded-full items-center ${
                      currentStep === index ? "bg-green-400" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TonkeeperBatteryUsage;
