import styled from "styled-components";
import { borders, fontSizes } from "../variables";

const { borderRadiusSize } = borders;
const { primaryFontSize } = fontSizes;

export const TextInput = styled.input`
  border: 1px solid black;
  width: 780px;
  padding: 0 10px;
  height: 30px;
  border-radius: ${borderRadiusSize};
  font-size: ${primaryFontSize};

  &:focus {
    outline: none;
  }
`;
