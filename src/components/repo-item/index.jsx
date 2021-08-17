import React from 'react';
import { A, Div, FlexBox, P, Span } from 'components/html';

import { ReactComponent as Book } from 'icons/book.svg';
import { ReactComponent as Star } from 'icons/star.svg';
import { ReactComponent as Fork } from 'icons/fork.svg';

import { Container } from './style';
import { withTheme } from 'styled-components';
import { Title } from 'components/title';
import Avatar from 'components/avatar';
import Button from 'components/button';

import { Repo } from 'models/repo';

const RepoItem = ({
  username,
  repositoryName,
  description,
  language,
  totalStars,
  forks,
  url,
  builtBy = [],
  theme,
}: Repo) => {
  return (
    <Container>
      <FlexBox justifyContent="space-between">
        <Div style={{ overflow: 'hidden' }}>
          <FlexBox alignItems="center">
            <Book fill={theme.colors.text[0]} />
            <Title href={url} target="_blank" ml={2}>
              {username} / {repositoryName}
            </Title>
          </FlexBox>
          <P my={1}>{description}</P>
          <FlexBox mt={2} alignItems="center">
            <Span mr={3}>{language}</Span>
            <Star fill={theme.colors.text[0]} />
            <Span mr={3}>{totalStars}</Span>
            <Fork fill={theme.colors.text[0]} />
            <Span mr={3}>{forks}</Span>
            <Span>Built by </Span>
            <>
              {builtBy.map(({ avatar, username, url }) => (
                <Span ml={1}>
                  <A href={url} target="_blank">
                    <Avatar src={avatar} alt={username} />
                  </A>
                </Span>
              ))}
            </>
          </FlexBox>
        </Div>
        <Div>
          <Button>
            <Star fill={theme.colors.text[0]} />
            <Span ml={1} color="text.1">
              Star
            </Span>
          </Button>
        </Div>
      </FlexBox>
    </Container>
  );
};

export default withTheme(RepoItem);
