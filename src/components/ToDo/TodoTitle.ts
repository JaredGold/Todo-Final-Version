import styled from "styled-components";
import { fontSizes } from "../../variables";

const { primaryFontSize } = fontSizes;

type Props = {
  checked: boolean;
};

export const TodoTitle = styled.input<Props>`
  text-decoration: ${(props: Props) => (props.checked ? "line-through" : null)};
  -webkit-touch-callout: none; /* iOS Safari */
  background-color: transparent;
  border: none;
  font-size: ${primaryFontSize};

  :focus {
    outline: none;
  }
`;
