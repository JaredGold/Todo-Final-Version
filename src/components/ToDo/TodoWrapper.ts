import styled from "styled-components";
import { colors, borders } from "../../variables";

const { fontColor, todoBackgroundColor, borderColor } = colors;
const { borderSize, borderRadiusSize } = borders;

export const TodoWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: 40px auto 40px;

  min-height: 30px;
  width: 800px;

  cursor: pointer;

  color: ${fontColor};
  background-color: ${todoBackgroundColor};

  border-left: ${borderSize} solid ${borderColor};
  border-right: ${borderSize} solid ${borderColor};
  border-bottom: ${borderSize} solid ${borderColor};

  overflow: hidden;

  &:first-child {
    border: ${borderSize} solid ${borderColor};
    border-radius: ${borderRadiusSize} ${borderRadiusSize} 0 0;
  }

  &:last-child {
    border-left: ${borderSize} solid ${borderColor};
    border-right: ${borderSize} solid ${borderColor};
    border-radius: 0 0 ${borderRadiusSize} ${borderRadiusSize};
  }
`;
