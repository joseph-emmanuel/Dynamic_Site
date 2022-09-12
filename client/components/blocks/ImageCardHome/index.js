import { CopyBlock, nord } from "react-code-blocks";
import style from "../ImageCardHome/ImageCardHome.module.css";

const ImageCardHome = ({ id, cardImage, cardLink, modalName, subHeading }) => {
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
      <div class="centered text-black flex flex-col justify-center  items-center ">
        <h1 className={`${style.heading} `}>{modalName}</h1>
        {/* <p className={`${style.subHeading} `}>
          {cardLink["label"].split(" ").slice(0, 3).join(" ")}{" "}
          <a href={`${cardLink["href"]}`} className="underline">
            {cardLink["label"].split(" ").splice(-2).join(" ")}
          </a>
        </p> */}
        {subHeading !== "" ? (
          <p className={`${style.subHeading} `}>
            {cardLink["subHead"]}
            {cardLink["label"] !== "" ? (
              <a href={`${cardLink["href"]}`} className="underline">
                {cardLink["label"]}
              </a>
            ) : null}
          </p>
        ) : null}
      </div>
      {/* <h1 className="max-w-[200px] m-auto">{modalName}</h1> */}
      <img
        src={`http://localhost:1337${cardImage["data"]["attributes"]["url"]}`}
        alt=""
      />
    </div>
  );
};

ImageCardHome.defaultProps = {};

export default ImageCardHome;
