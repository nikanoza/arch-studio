import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

type PropsType = {
  title: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

const Project: React.FC<PropsType> = ({
  title,
  images: { mobile, tablet, desktop },
}) => {
  return (
    <Wrapper mobile={mobile} tablet={tablet} desktop={desktop}>
      <TextsBox>
        <Title>Project Del Sol</Title>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <Description>View All Projects</Description>
        </Link>
      </TextsBox>
    </Wrapper>
  );
};

export default Project;

type WrapperProps = {
  mobile: string;
  tablet: string;
  desktop: string;
};

const Wrapper = styled.div(
  ({ mobile }: WrapperProps) => css`
    width: 100%;
    height: fit-content;
    background-image: url(${mobile});
    background-size: 100%;
  `
);

const TextsBox = styled.div`
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  display: flex;
  flex-direction: column;
  padding: 153px 0 23px 24px;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;

const Description = styled.h4`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
