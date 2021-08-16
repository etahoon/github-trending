import React from 'react';
import { A, Div, FlexBox, P, Span } from 'components/html';

import { ReactComponent as Book } from 'icons/book.svg';
import { ReactComponent as Flame } from 'icons/flame.svg';

import { withTheme } from 'styled-components';
import Avatar from 'components/avatar';
import { Title } from 'components/title';
import { Container } from './style';
import Button from 'components/button';

const DeveloperItem = ({
  rank,
  name,
  username,
  repositoryName,
  description,
  language,
  totalStars,
  forks,
  url,
  builtBy = [],
  theme,
  avatar,
  popularRepository,
}) => {
  console.log(popularRepository);
  return (
    <Container>
      <FlexBox>
        <Span my={1}>{rank}</Span>
        <Span mx={3}>
          <A href={url} target="_blank">
            <Avatar src={avatar} alt={username} size="large" />
          </A>
        </Span>
        <FlexBox flexGrow={1}>
          <FlexBox width="66.66%">
            <Div width="50%">
              <Title href={url} target="_blank">
                {name}
              </Title>
              <P>{username}</P>
            </Div>
            <Div width="50%">
              <FlexBox alignItems="center" mb={2}>
                <Flame />
                <Span ml={1}>POPULAR REPO</Span>
              </FlexBox>
              <FlexBox>
                <Book fill={theme.colors.text[0]} />
                <Title size="small" ml={2}>{popularRepository.repositoryName}</Title>
              </FlexBox>
              <Span>{popularRepository.description}</Span>
            </Div>
          </FlexBox>
          <Div width="33.33%" textAlign="right">
            <Button>Follow</Button>
          </Div>
        </FlexBox>
      </FlexBox>
    </Container>
  );
};

export default withTheme(DeveloperItem);
