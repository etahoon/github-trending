import React from 'react';
import { FlexBox, P, Span } from 'components/html';

import { ReactComponent as Book } from 'icons/book.svg';
import { ReactComponent as Star } from 'icons/star.svg';
import { ReactComponent as Fork } from 'icons/fork.svg';

import { Container, Title, AvatarLink, Avatar } from './style';
import { withTheme } from 'styled-components';

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
}) => {
  return (
    <Container>
      <FlexBox alignItems="center">
        <Book fill={theme.colors.textPrimary} />
        <Title href={url} target="_blank">
          {username} / {repositoryName}
        </Title>
      </FlexBox>
      <P my={1}>{description}</P>
      <FlexBox mt={2} alignItems="center">
        <Span mr={3}>{language}</Span>
        <Star fill={theme.colors.textPrimary} />
        <Span mr={3}>{totalStars}</Span>
        <Fork fill={theme.colors.textPrimary} />
        <Span mr={3}>{forks}</Span>
        <Span>Built by </Span>
        <>
          {builtBy.map(({ avatar, username, url }) => (
            <Span ml={1}>
              <AvatarLink href={url} target="_blank">
                <Avatar src={avatar} alt={username} />
              </AvatarLink>
            </Span>
          ))}
        </>
      </FlexBox>
      {/* <FlexBox mt={2} alignItems="center">
        <FlexBox>
          <Span>{language}</Span>
        </FlexBox>
        <Div></Div>
        <FlexBox ml={3} alignItems="center">
          <Star fill={theme.colors.textPrimary} />
          <Span>{totalStars}</Span>
        </FlexBox>
        <FlexBox ml={3} alignItems="center">
          <Fork fill={theme.colors.textPrimary} />
          <Span>{forks}</Span>
        </FlexBox>
        <FlexBox ml={3}>
          <Span>Built by </Span>
        </FlexBox>
        <FlexBox>
          {builtBy.map(({ avatar, username, url }) => (
            <Span ml={1}>
              <AvatarLink href={url} target="_blank">
                <Avatar src={avatar} alt={username} />
              </AvatarLink>
            </Span>
          ))}
        </FlexBox>
      </FlexBox> */}
    </Container>
  );
};

export default withTheme(RepoItem);
