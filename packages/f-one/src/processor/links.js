import Link from "@frontity/components/link";
import LinkManipulate from "../components/link-manipulate"

const links = {
  name: "links",
  priority: 20,
  test: (node) =>
    node.component === "a" &&  
    node.props?.href?.includes('staging2.awsm.in'),

  processor: ({ node }) => {
    node.component = LinkManipulate;       
    return node;
  },
};

export default links;
