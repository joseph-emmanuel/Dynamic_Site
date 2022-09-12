import { CopyBlock, nord } from "react-code-blocks";
import style from "../ImageCardHome/ImageCardHome.module.css";

const ImageCardHome = ({ id, cardImage, cardLink, modalName }) => {
  console.log("Link is :", cardLink);
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
      <div class="centered text-black ">
        <h1 className={`${style.heading} ml-14`}>{modalName}</h1>
        <p className={`${style.subHeading} `}>
          {cardLink["label"].split(" ").slice(0, 3).join(" ")}{" "}
          <a href={`${cardLink["href"]}`} className="underline">
            {cardLink["label"].split(" ").splice(-2).join(" ")}
          </a>
        </p>
      </div>
      {/* <h1 className="max-w-[200px] m-auto">{modalName}</h1> */}
      <img
        src={`http://localhost:1337${cardImage["data"]["attributes"]["url"]}`}
        alt=""
      />
    </div>

    // <div className={`bg-${theme}`}>
    //   <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
    //     <h2 className={`text-3xl font-extrabold text-black sm:text-4xl`}>
    //       {title && <span className="block">{title}</span>}
    //       {text && <span className={`block text-white`}>{text}</span>}
    //     </h2>
    //     <div className="py-12 lg:flex-shrink-0 flex items-center justify-center">
    //       <div className="block md:w-2/5 w-full shadow-2xl text-center">
    //         <CopyBlock
    //           text={commandLine}
    //           language="bash"
    //           codeBlock
    //           theme={nord}
    //           showLineNumbers={false}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

ImageCardHome.defaultProps = {};

export default ImageCardHome;
