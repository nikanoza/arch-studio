import styled from "styled-components";
import { Logo, Hamburger, Close } from "@/svg";
import { Backdrop } from "@/components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const openMenu = () => {
    setShow(true);
  };

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <HeaderElement>
      <Link to="/">
        <Logo dark={true} />
      </Link>
      {!show ? (
        <Hamburger clickHandler={openMenu} />
      ) : (
        <Close clickHandler={closeMenu} />
      )}
      {show ? (
        <Backdrop>
          <MenuBox>
            <Link
              to="/portfolio"
              style={{ textDecoration: "none" }}
              onClick={closeMenu}
            >
              <Text>Portfolio</Text>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none" }}
              onClick={closeMenu}
            >
              <Text>About Us</Text>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none" }}
              onClick={closeMenu}
            >
              <Text>Contact</Text>
            </Link>
          </MenuBox>
        </Backdrop>
      ) : null}
    </HeaderElement>
  );
};

export default Header;
const HeaderElement = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 3;
`;

const MenuBox = styled.div`
  padding: 39px 48px 42px 48px;
  background-color: var(--veryLightGrey);
  height: fit-content;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  row-gap: 17px;
`;

const Text = styled.h3`
  color: var(--dark);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;
