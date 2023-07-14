import styled, { css } from "styled-components";
import { Arrow } from "@/svg";
import { useNavigate } from "react-router-dom";

type PropsType = {
  title: string;
  buttonText: string;
  to: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description?: string;
};

const HomeBanner: React.FC<PropsType> = ({
  title,
  description,
  buttonText,
  to,
  images: { mobile, tablet, desktop },
}) => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate(to);
  };

  return (
    <Wrapper mobile={mobile} tablet={tablet} desktop={desktop}>
      <TextsBox description={Boolean(description)}>
        <BannerTitle>{title}</BannerTitle>
        {description ? (
          <BannerDescription>{description}</BannerDescription>
        ) : null}
        <ButtonBox onClick={navigationHandler}>
          <Text>{buttonText}</Text>
          <Arrow dark={false} />
        </ButtonBox>
      </TextsBox>
    </Wrapper>
  );
};

export default HomeBanner;

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
  `
);

type TextProps = {
  description: boolean;
};

const TextsBox = styled.div(
  ({ description }: TextProps) => css`
    width: 100%;
    padding: ${description ? "116px 32px 110px 32px" : "181px 32px 180px 32px"};
    background-color: rgba(0, 0, 0, 0.3499999940395355);
  `
);

const BannerTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1.2px;
  color: white;
`;

const BannerDescription = styled.h3`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 11px;
`;

const ButtonBox = styled.button`
  padding: 25px 32px 22px 32px;
  display: flex;
  column-gap: 24px;
  align-items: center;
  background-color: var(--dark);
  margin-top: 31px;
  border: none;
`;

const Text = styled.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  color: white;
`;
