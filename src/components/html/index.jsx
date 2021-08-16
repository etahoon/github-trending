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
} from 'styled-system';

export const styles = css `
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
  color: ${props => props.theme.colors.textPrimary};
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


export const Icon = styled.img`
  fill: ${props => props.theme.colors.textPrimary};
`;