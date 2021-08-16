import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { variant } from 'styled-system';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.bgSecondary};
  border: 1px solid ${props => props.theme.colors.borderPrimary};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin: -1px -1px 0;
  padding: 16px;
`;

export const TabStyles = styled(Link)`
  border: 1px solid ${props => props.theme.colors.borderPrimary};
  color: ${props => props.theme.colors.text[1]};
  float: left;
  font-weight: 500;
  line-height: 20px;
  padding: 5px 16px;
  font-size: 14px;
  position: relative;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;

  ${variant({
    variants: {
      first: {
        borderBottomLeftRadius: '6px',
        borderTopLeftRadius: '6px',
      },
      last: {
        borderBottomRightRadius: '6px',
        borderTopRightRadius: '6px',
      },
    },
  })}

  &.active {
    background-color: ${props => props.theme.colors.bgSelectedPrimary};
    border-color: ${props => props.theme.colors.borderSelectedPrimary};
    color: ${props => props.theme.colors.textSelectedPrimary};
  }
`;
