import { Link } from "react-router-dom";

const CommonHeader = () => {
  return (
    <div className="font-bodoni p-4 text-xl text-white/70 w-full m-auto">
      <Link
        className="p-3 hover:text-white transition-all ease-in-out duration-200"
        to="/"
      >
        At My Melo
      </Link>
    </div>
  );
};

export default CommonHeader;
