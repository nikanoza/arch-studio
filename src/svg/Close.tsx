import styled from "styled-components";

const Close: React.FC<{ clickHandler: () => void }> = ({ clickHandler }) => {
  return (
    <Svg onClick={clickHandler}>
      <path
        fill="#1B1D23"
        fillRule="evenodd"
        d="M17.425.954l2.12 2.121-7.424 7.425 7.425 7.425-2.121 2.12L10 12.622l-7.425 7.425-2.12-2.121L7.878 10.5.454 3.075 2.575.955 10 8.378 17.425.954z"
      />
    </Svg>
  );
};

export default Close;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 20px;
  height: 21px;
  cursor: pointer;
`;
