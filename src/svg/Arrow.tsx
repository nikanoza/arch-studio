import styled from "styled-components";

const Arrow = () => {
  return (
    <Svg>
      <g fill="none" fillRule="evenodd" stroke="#1B1D23" strokeWidth="2">
        <path d="M15 1l9 9-9 9M0 10h24" />
      </g>
    </Svg>
  );
};

export default Arrow;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 26px;
  height: 20px;
`;
