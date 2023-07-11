import { Arrow, Logo } from "@/svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterElement>
      <Link to="/">
        <LogoBox>
          <Logo dark={false} />
        </LogoBox>
      </Link>
      <FooterMenu>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <FooterLinkItem>Portfolio</FooterLinkItem>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <FooterLinkItem>About Us</FooterLinkItem>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <FooterLinkItem>Contact</FooterLinkItem>
        </Link>
      </FooterMenu>
      <Link to="/portfolio" style={{ textDecoration: "none" }}>
        <SeePortfolio>
          <Text>See Our Portfolio</Text>
          <Arrow dark={false} />
        </SeePortfolio>
      </Link>
    </FooterElement>
  );
};

export default Footer;

const FooterElement = styled.footer`
  padding: 0 62px 48px 62px;
  background-color: var(--veryLightGrey);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoBox = styled.div`
  padding: 48px 31px;
  background-color: var(--dark);
  width: fit-content;
  height: fit-content;
  margin-top: -60px;
`;

const FooterMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
  margin-top: 33px;
`;

const FooterLinkItem = styled.span`
  color: var(--mediumGrey);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
`;

const SeePortfolio = styled.div`
  padding: 25px 32px 22px 32px;
  display: flex;
  column-gap: 24px;
  align-items: center;
  background-color: var(--dark);
  margin-top: 31px;
`;

const Text = styled.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  color: white;
`;
