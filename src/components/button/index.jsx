import styled from 'styled-components';
import { layout, space } from 'styled-system';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  padding: 3px 12px;
  background-color: #21262d;
  box-shadow: var(--color-btn-shadow), var(--color-btn-inset-shadow);
  color: #c9d1d9;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #30363d;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  user-select: none;
  white-space: nowrap;

  &:hover {
    background-color: #30363d;
    border-color: #8b949e;
    transition-duration: 0.1s;
  }

  ${space}
  ${layout}
`;


export default Button;