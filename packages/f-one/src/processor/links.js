import Link from "../components/link";

const links = {
  name: "links",
  priority: 20,
  test: ({ node }) =>
    node.component === "a" && /staging2.awsm.in/.test( node.props.href ),

  processor: ({ node }) => {
    node.props.link = '/'+node.props.href.match(/([^\/]*)\/*$/)[1];
    node.component = Link;       
    return node;
  },
};

export default links;
