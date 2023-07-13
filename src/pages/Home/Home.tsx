import { HomeBanner, Info, Projects } from "@/components";
import { paramourMobile, teamMobile } from "@/assets";
import styled from "styled-components";

const Home = () => {
  return (
    <Main>
      <HomeBanner
        title="Project Paramour"
        description=" Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture."
        buttonText="See Our Portfolio"
        to="/portfolio"
        images={{
          mobile: paramourMobile,
          tablet: paramourMobile,
          desktop: paramourMobile,
        }}
      />
      <Info />
      <HomeBanner
        title="Small team, big ideas"
        buttonText="About Us"
        to="/about"
        images={{
          mobile: teamMobile,
          tablet: teamMobile,
          desktop: teamMobile,
        }}
      />
      <Projects />
    </Main>
  );
};

export default Home;

const Main = styled.main`
  margin-top: 105px;
`;
