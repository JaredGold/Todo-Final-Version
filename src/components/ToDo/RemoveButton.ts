import styled from "styled-components";
import { colors } from "../../variables";

const {
  removeButtonColor,
  removeButtonHoverColor,
  removeButtonBackgroundColor
} = colors;

export const RemoveButton = styled.button`
  color: ${removeButtonColor};
  background-color: ${removeButtonBackgroundColor};
  border: none;

  height: 100%;
  font-size: 20px;
  border-left: 1px solid black;

  :hover {
    cursor: pointer;
    color: ${removeButtonHoverColor};
  }
`;
