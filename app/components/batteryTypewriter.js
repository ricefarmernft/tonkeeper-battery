import Typewriter from "typewriter-effect";

const BatteryTypewriter = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("Battery").pauseFor(2500).start();
      }}
    />
  );
};

export default BatteryTypewriter;
