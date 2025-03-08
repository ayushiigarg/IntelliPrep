import { Link } from "react-router-dom"

const LogoContainer = () => {
  return (
    <div className="flex items-center w-[150px] h-[50px] ml-[-60px]">
      <Link to={"/"}>
        <img src="/assets/img/logo/logo.png" alt="Logo" className="w-full h-auto object-contain" />
      </Link>
    </div>
  );
};


export default  LogoContainer