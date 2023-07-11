import styled from "styled-components";
import Routing from "@/Routing";
import { Footer, Header } from "@/layouts";

function App() {
  return (
    <Main>
      <Wrapper>
        <Header />
        <Routing />
      </Wrapper>
      <Footer />
    </Main>
  );
}

export default App;

const Main = styled.main`
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div``;
