import React from 'react';

import List from 'components/list';
import ListItem from 'components/list-item';
import RepoItem from 'components/repo-item';
import Filter from 'components/filter';
import useFetchRepos from 'hooks/use-fetch-repos';
import { useState } from 'react';

const Repos = () => {
  const [language, setLanguage] = useState('');
  const { repos, languages } = useFetchRepos({ language });

  return (
    <List
      filter={
        <Filter
          choices={languages}
          selected={language}
          onSelect={setLanguage}
        />
      }
    >
      {repos.map(d => (
        <ListItem key={d.rank}>
          <RepoItem {...d} />
        </ListItem>
      ))}
    </List>
  );
};

export default Repos;
