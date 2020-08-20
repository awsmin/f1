  
import React, { useEffect } from "react";
import { connect, useConnect } from "frontity";
import Link from "@frontity/components/link";

const LinkManipulate = (props) => {
  const { state,
    actions,
    onClick: onClickProp, } = useConnect();    
    if (props?.href) {
      props.link = '/'+props.href.match(/([^\/]*)\/*$/)[1];      
    }
    else {
      props.link = "#"
    }
  const link = props.link
  const onClick = (event) => {
    // Do nothing if it's an external link
   // if (isExternal) return;

    event.preventDefault();
    // Set the router to the new url.
    actions.router.set(link);

    // Scroll the page to the top
    window.scrollTo(0, 0);

    if (onClickProp) {
      onClickProp(event);
    }
  };



    return <a href={link}  onClick={onClick} className={props.className} onMouseEnter={() => {
      // Prefetch the link's content when the user hovers on the link
      if (state.theme.autoPreFetch === "hover")
        actions.source.fetch(link);
    }}>
    {props.children}</a>;
  };
  
  export default connect(LinkManipulate);