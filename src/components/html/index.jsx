import styled, { css } from 'styled-components';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  variant,
} from 'styled-system';

import { textTransform, textDecoration, cursor, zIndex } from 'styles/props';

export const styles = css`
  color: ${props => props.theme.colors.text[0]};
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${cursor}
  ${zIndex}
  ${textTransform}
  ${textDecoration}
`;

export const P = styled.p`
  margin-bottom: 10px;
  margin-top: 0;
  font-size: 14px;
  ${styles}
`;

export const Span = styled.span`
  font-size: 12px;
  ${styles}
`;

export const FlexBox = styled.div`
  display: flex;
  ${styles}
`;

export const Div = styled.div`
  ${styles}
`;

export const A = styled.a`
  text-decoration: none;
`;

export const Icon = styled.img`
  fill: ${props => props.theme.colors.text[0]};
`;
