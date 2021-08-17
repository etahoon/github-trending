import React from 'react';

import List from 'components/list';
import ListItem from 'components/list-item';
import DeveloperItem from 'components/developer-item';
import useFetchDevelopers from 'hooks/use-fetch-developers';

const Developers = () => {
  const { data = [] } = useFetchDevelopers();

  return (
    <List>
      {data.map(d => (
        <ListItem key={d.rank}>
          <DeveloperItem {...d} />
        </ListItem>
      ))}
    </List>
  );
};

export default Developers;
