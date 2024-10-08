import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import logo from "../assets/kevinRushLogo.png";
import { FaSquareXTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className=" mb-20 flex align-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="logo" className="mx-2 w-10" /> */}
        <h1 className="text-6xl ">{"VRS"}</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/vinay-ramesh-soppadal-17855b14b/"
            )
          }
          className="cursor-pointer"
        />
        <FaGithub
          onClick={() => window.open("https://github.com/vinay-ramesh")}
          className="cursor-pointer"
        />
        <FaInstagram
          onClick={() => window.open("https://www.instagram.com/vinay.r.s")}
          className="cursor-pointer"
        />
        <FaSquareXTwitter
          onClick={() => window.open("https://x.com/vinayramesh7813")}
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default NavBar;
