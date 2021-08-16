import React from 'react';

import { P } from 'components/html';
import ListHeader from 'components/list-header';
import { Container } from './style';

interface Props {
  children: JSX.Element;
}

const List: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container>
      <ListHeader />
      <div>{children}</div>
    </Container>
  );
};

export default List;
