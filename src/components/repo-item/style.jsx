import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.colors.textPrimary};
`;

export const Title = styled.a`
  color: ${props => props.theme.colors.linkPrimary};
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  margin-left: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

export const AvatarLink = styled.a`
  text-decoration: none;
`;

export const Avatar = styled.img`
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgba(240, 246, 252, 0.1);
  display: inline-block;
  flex-shrink: 0;
  line-height: 1;
  overflow: hidden;
  vertical-align: middle;
  height: 20px;
  aspect-ratio: auto 20 / 20;
  width: 20px;
  border-radius: 50%;
`;
