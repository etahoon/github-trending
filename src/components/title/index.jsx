import styled from 'styled-components';
import { space, variant } from 'styled-system';

export const Title = styled.a`
  color: ${props => props.theme.colors.linkPrimary};
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;


  ${variant({
    prop: 'size',
    variants: {
      small: {
        fontSize: 16,
      },
      large: {
        fontSize: 20,
      },
    },
  })}

  ${space}

  &:hover {
    text-decoration: underline;
  }
`;

Title.defaultProps = {
  size: 'large',
};

export default Title;
