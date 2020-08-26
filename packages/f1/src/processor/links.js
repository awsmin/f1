import Link from "../components/link";

const links = {
  name: "links",
  priority: 20,
  test: ({ node, state }) =>
    node.component === "a" && node.props.href.includes(state.frontity.url),

  processor: ({ node }) => {
    node.props.link = '/'+node.props.href.match(/([^\/]*)\/*$/)[1];
    node.props.href = '/'+node.props.href.match(/([^\/]*)\/*$/)[1];
    node.component = Link;       
    return node;
  },
};

export default links;
