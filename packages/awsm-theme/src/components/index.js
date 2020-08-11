import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  :root {
    --brand: #5B3BE8;
    --black: #000000;
    --bodycolor: #343434;
  }
  body {
    margin: 0;
    color:var(--bodycolor);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-feature-settings: "kern";
    -webkit-font-smoothing: antialiased;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    color:var(--black);
  }
  p {
    line-height:24px;
    font-size:18px;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  width:100%;
  max-width:1200px;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 2.75rem;
  padding-right: 15px;
  padding-left: 15px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
