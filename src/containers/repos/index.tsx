import React from 'react';
import { useQuery } from 'react-query';
import githubTrends from 'github-trends-api';

import List from 'components/list';
import ListItem from 'components/list-item';
import RepoItem from 'components/repo-item';

const Repos = () => {
  const {
    isLoading,
    error,
    data = [],
  } = useQuery('reposData', () =>
    fetch('/repositories').then(res => res.json())
  );

  console.log('data', data);

  return (
    <div>
      <List>
        {data.map(d => (
          <ListItem key={d.rank}>
            <RepoItem {...d} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Repos;
