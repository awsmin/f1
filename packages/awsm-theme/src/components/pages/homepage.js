import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import List from "../list";
import Image from "@frontity/components/image";

const HomePage = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const homepage = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  //const BannerSlider = homepage.acf.banner_slider; 
 

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);


  // Load the post, but only if the data is ready.
  return data.isReady ? (        
    <Content>
      {/* <section className="section banner">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-lg-7 banner-heading">
              hello
            </div>
          </div>
        </div>
      </section> */}
      <Html2React html={homepage.content.rendered} />
    </Content>
  ) : null;
};

export default connect(HomePage);

const Container = styled.div`
  
`;

const Content = styled.div`
width: 100%;
position:relative;
.hero-homepage {
  .wp-block-columns {
    align-items: center;
    .wp-block-button {
      .wp-block-button__link {
        background: var(--brand);  
        border:1px solid transparent;   
        border-color:var(--brand);  
        box-shadow:0px 2px 5px 0px rgb(0 0 0 / 0.4); 
        transition: all 0.3s ease;  
        margin-right: 0.5rem;  
        &:hover {
          color:var(--black);
          background:transparent;
        }
      }
    }
    .wp-block-button.is-style-outline {       
      .wp-block-button__link {
        background: transparent;
        border-color:var(--brand);     
        color:var(--brand);  
        &:hover {
          color:var(--black);
        }
      }
    }
  }
}

`;
