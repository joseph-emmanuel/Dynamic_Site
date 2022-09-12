import { CopyBlock, nord } from "react-code-blocks";
import style from "../Hero/Hero.module.css";

const Hero = ({
  id,
  heroImage,
  heroHeading,
  heroSubHeading,
  heroTextColor,
}) => {
  console.log("Hero COLOR", heroTextColor);
  // console.log("Link is :", cardLink["subHead"]);
  // const ImageCardHome = ({ title, text, theme, commandLine }) => {
  //   console.log(
  //     "title, text, theme, commandLine : ",
  //     title,
  //     text,
  //     theme,
  //     commandLine
  //   );
  return (
    <div className="relative">
      <div
        className={`centered text-${heroTextColor} flex flex-col justify-center  items-center`}
      >
        <h1 className={`${style.heading} `}>{heroHeading}</h1>
        <p className="mx-auto">{heroSubHeading}</p>
      </div>
      {/* <h1 className="max-w-[200px] m-auto">{modalName}</h1> */}
      <img
        src={`http://localhost:1337${heroImage["data"]["attributes"]["url"]}`}
        alt=""
      />
    </div>
  );
};

Hero.defaultProps = {};

export default Hero;
