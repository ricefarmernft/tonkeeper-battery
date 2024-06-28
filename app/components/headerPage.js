import { FaTwitter, FaGithub } from "react-icons/fa";

const HeaderPage = () => {
  return (
    <div className="flex justify-end gap-2 md:gap-4 mt-4 mr-4 sm:mr-0">
      <a
        href="https://x.com/RiceFarmerNFT"
        target="_blank"
        rel="noreferrer"
        className="transition-all duration-300 ease-in-out transform hover:scale-110"
      >
        <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
      </a>
      <a
        href="https://github.com/ricefarmernft"
        target="_blank"
        rel="noreferrer"
        className="transition-all duration-300 ease-in-out transform hover:scale-110"
      >
        <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
      </a>
    </div>
  );
};
export default HeaderPage;
