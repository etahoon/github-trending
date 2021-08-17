import React from 'react';

import { Container } from './style';
import HeaderTabs from './tabs';

const ListHeader = ({ filter }) => {
  return (
    <Container>
      <HeaderTabs />
      {filter}
    </Container>
  );
};

export default ListHeader;
