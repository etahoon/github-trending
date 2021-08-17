import { Div } from 'components/html';
import styled from 'styled-components';

export const ModalStyled = styled.div`
  z-index: 99;
  box-shadow: ${props => props.theme.shadows.large};
  background-clip: padding-box;
  background: ${props => props.theme.colors.overlayPrimary};
  border: 1px solid ${props => props.theme.colors.borderPrimary};
  border-radius: 6px;
  font-size: 12px;
  margin-bottom: 20px;
  margin-top: 4px;
  overflow: hidden;
  width: 300px;
  right: 0;
  position: absolute;
`;

export const MenuHeader = styled.div`
  background: ${props => props.theme.colors.overlayPrimary};
  border-bottom: 1px solid ${props => props.theme.colors.borderPrimary};
  line-height: 16px;
  padding: 8px 10px;
  font-weight: 600;
  color: ${props => props.theme.colors.text[1]};
`;

export const MenuBody = styled.div`
  max-height: 400px;
  overflow-y: scroll;
`;

export const MenuItemStyled = styled.a`
  background: ${props => props.theme.colors.overlayPrimary};
  border-left: 0;
  border-right: 0;
  border-top: 0;
  text-align: left;
  border-bottom: 1px solid ${props => props.theme.colors.borderPrimary};
  color: ${props => props.theme.colors.text[1]};
  cursor: pointer;
  display: block;
  overflow: hidden;
  padding: 8px 8px 8px 30px;

  &:hover {
    background-color: ${props => props.theme.colors.bgSelectedPrimary};
    color: ${props => props.theme.colors.textSelectedPrimary};
  }
`;

export const MenuInputWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderPrimary};
  padding: 10px;
`;

export const MenuInput = styled.input`
  padding: 5px 12px;
  border: 1px solid ${props => props.theme.colors.borderSecondary};
  border-radius: 6px;
  display: block;
  max-width: 100%;
  padding: 5px;
  width: 100%;
  background-color: ${props => props.theme.colors.bg};
  background-position: right 8px center;
  background-repeat: no-repeat;
  border: 1px solid ${props => props.theme.colors.borderPrimary};
  border-radius: 6px;
  box-shadow: var(--color-shadow-inset);
  color: ${props => props.theme.colors.text[1]};
  font-size: 14px;
  line-height: 20px;
  outline: none;
  padding: 5px 12px;

  &:focus {
    border-color: ${props => props.theme.colors.inputFocus};
    box-shadow: ${props => props.theme.shadows.input};
    outline: none;
  }
`;

export const IconStyled = styled(Div)`
  position: absolute;
  top: 7px;
  left: 8px;
`;
