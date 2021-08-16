import React from 'react';
import { useQuery } from 'react-query';

import List from 'components/list';
import ListItem from 'components/list-item';
import DeveloperItem from 'components/developer-item';

const Developers = () => {
  const { isLoading, data = [] } = useQuery('developersData', () =>
    fetch('/developers').then(res => res.json())
  );

  console.log('data', data);

  return (
    <div>
      <List>
        {data.map(d => (
          <ListItem key={d.rank}>
            <DeveloperItem {...d} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Developers;
