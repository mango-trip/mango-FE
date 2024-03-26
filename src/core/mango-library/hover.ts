import { css } from 'styled-components';

const CursorPointer = css`
  cursor: pointer;
`;

export const HoverStyle = {
  Opacity: css`
    ${CursorPointer}
    &:hover {
      opacity: 0.7;
    }
  `,
};
