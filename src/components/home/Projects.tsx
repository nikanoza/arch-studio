import styled from "styled-components";
import Project from "../sheared/Project";
import { DelSolMobile, PrototypeMobile, TowerMobile } from "@/assets";

const Projects = () => {
  return (
    <Section>
      <Title>Featured</Title>
      <List>
        <Project
          title="Project Del Sol"
          images={{
            mobile: DelSolMobile,
            tablet: DelSolMobile,
            desktop: DelSolMobile,
          }}
        />
        <Project
          title="228B Tower"
          images={{
            mobile: TowerMobile,
            tablet: TowerMobile,
            desktop: TowerMobile,
          }}
        />
        <Project
          title="Le Prototype"
          images={{
            mobile: PrototypeMobile,
            tablet: PrototypeMobile,
            desktop: PrototypeMobile,
          }}
        />
      </List>
    </Section>
  );
};

export default Projects;

const Section = styled.section`
  padding: 73px 32px 132px 32px;
`;

const Title = styled.h2`
  color: var(--dark);
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: -1.714px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 43px;
  row-gap: 24px;
`;
