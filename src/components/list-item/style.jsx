import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid ${props => props.theme.colors.borderSecondary};
  list-style-type: none;
  margin-top: -1px;
  padding: 16px;
`;
