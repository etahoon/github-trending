import React from 'react';

import { P } from 'components/html';
import ListHeader from 'components/list-header';
import { Container } from './style';

interface Props {
  children: JSX.Element | JSX.Element[];
  filter: JSX.Element;
}

const List: React.FC<Props> = ({ children, filter }: Props) => {
  return (
    <Container>
      <ListHeader filter={filter} />
      <div>{children}</div>
    </Container>
  );
};

export default List;
