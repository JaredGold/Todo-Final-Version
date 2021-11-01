import styled from "styled-components";
import { colors, fontSizes } from "../variables";

const { headingColor } = colors;
const { headingFontSize } = fontSizes;

export const Header = styled.div`
  font-size: ${headingFontSize};
  text-align: center;
  color: ${headingColor};
`;
