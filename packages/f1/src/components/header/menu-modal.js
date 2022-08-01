import React from "react";
import { styled, connect } from "frontity";
import Link from "../link";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
            >
              {name}
            </MenuLink>
          ))}
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: #1f38c5;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  display:flex;
  flex-direction: column;
  width: 100%;
`;

const MenuLink = styled(Link)`
  width: 100%;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
  color:var(--white);
    display: block;
    position: relative;
    z-index: 999;
    transition: all 0.3s ease 0s;
  &:hover,
  &:focus {
    color:var(--black);
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: var(--black);
    font-weight: bold;
  }
`;

export default connect(MenuModal);
