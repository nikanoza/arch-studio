import styled from "styled-components";

const Info = () => {
  return (
    <Wrapper>
      <Line></Line>
      <Title>Welcome to Arch Studio</Title>
      <Description>
        We have a unique network and skillset to help bring your projects to
        life. Our small team of highly skilled individuals combined with our
        large network put us in a strong position to deliver exceptional
        results. <br /> <br />
        Over the past 10 years, we have worked on all kinds of projects. From
        stations to high-rise buildings, we create spaces that inspire and
        delight. <br /> <br />
        We work closely with our clients so that we understand the intricacies
        of each project. This allows us to work in harmony the surrounding area
        to create truly stunning projects that will stand the test of time.
      </Description>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.div`
  padding: 72px 32px 113px 32px;
`;

const Line = styled.span`
  display: block;
  width: 65px;
  height: 1px;
  background-color: var(--lightGrey);
`;

const Title = styled.h2`
  color: var(--dark);
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: -1.714px;
  margin-top: 69px;
`;

const Description = styled.h3`
  color: var(--darkGrey);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 22px;
`;
