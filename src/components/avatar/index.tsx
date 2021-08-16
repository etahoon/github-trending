import styled from 'styled-components';
import { variant } from 'styled-system';

const Avatar = styled.img`
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgba(240, 246, 252, 0.1);
  display: inline-block;
  flex-shrink: 0;
  line-height: 1;
  overflow: hidden;
  vertical-align: middle;
  border-radius: 50%;

  ${variant({
    prop: 'size',
    variants: {
      small: {
        height: 20,
        width: 20,
      },
      large: {
        height: 48,
        width: 48,
      },
    },
  })}
`;

Avatar.defaultProps = {
  size: 'small',
};

export default Avatar;
