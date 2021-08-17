import React from 'react';

import { Container } from './style';
interface Props {
  children: JSX.Element;
}

const MainContainer: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
