import styled from 'styled-components';
import { colors, fontSizes, fontStyles } from '../variables';

// const { base } = colors;
const { headingFontSize } = fontSizes;
const { headerFontStyle } = fontStyles;

export const Header = styled.div`
  color: white;
  font-size: ${headingFontSize};
  font-family: ${headerFontStyle};

  /* alignment */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;

  background-color: #434343;
`;
