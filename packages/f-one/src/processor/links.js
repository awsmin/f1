import Link from "@frontity/components/link";
import LinkManipulate from "../components/link-manipulate"

const links = {
  name: "links",
  priority: 20,
  test: (node) =>
    node.component === "a",
  processor: ({ node }) => {
    node.component = LinkManipulate;       
    return node;
  },
};

export default links;
