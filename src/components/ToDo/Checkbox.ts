import styled from "styled-components";
import { colors } from "../../variables";

const { checkboxColor } = colors;

export const Checkbox = styled.input`
  appearance: none;
  margin: 0;
  font: inherit;
  justify-self: center;

  width: 1em;
  height: 1em;
  border: 0.15em solid currentColor;
  border-radius: 0.2em;
  transform: translateY(-0.075em);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ::before {
    content: "";
    width: 0.5em;
    height: 0.5em;
    transform: scale(0);
    transition: 100ms transform ease-in-out;
    box-shadow: inset 1em 1em ${checkboxColor};
    /* draws the check box */
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  :checked::before {
    transform: scale(1);
  }
`;
