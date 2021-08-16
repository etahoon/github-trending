import React from 'react';

import { P } from 'components/html';
import { Title, Container } from './style';

const Header = () => {
  return (
    <nav>
      <Container>
        <Title>Trending</Title>
        <P>See what the GitHub community is most excited about today.</P>
      </Container>
    </nav>
  );
};

export default Header;
