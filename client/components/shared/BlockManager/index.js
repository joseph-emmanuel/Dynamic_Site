import ImageCardHome from "../../blocks/ImageCardHome";
import Hero from "../../blocks/Hero";

const getBlockComponent = ({ __component, ...rest }, index) => {
  // console.log("my component is : ", __component);
  let Block;

  switch (__component) {
    case "blocks.image-card-home":
      Block = ImageCardHome;
      break;
    case "blocks.hero":
      Block = Hero;
      break;
    // case "blocks.cta-command-line":
    //   Block = CtaCommandLine;
    //   break;
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;
