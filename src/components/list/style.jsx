import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  margin: auto;
  background-color: #0d1117;
  border: 1px solid ${props => props.theme.colors.borderPrimary};
  border-radius: 6px;
`;
