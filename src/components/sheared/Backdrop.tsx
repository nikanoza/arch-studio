import styled from "styled-components";

const Backdrop: React.FC<{ children: JSX.Element }> = (props) => {
  return <Back>{props.children}</Back>;
};

export default Backdrop;

const Back = styled.div`
  width: 100vw;
  height: calc(100vh - 105px);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  position: fixed;
  left: 0;
  top: 105px;
  z-index: 2;
`;
