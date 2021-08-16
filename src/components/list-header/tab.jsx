import React from 'react';

import { TabStyles } from './style';

const ListTab = ({ variant, pathname, active, name }) => {
  return (
    <TabStyles
      to={pathname}
      variant={variant}
      className={active ? 'active' : ''}
    >
      {name}
    </TabStyles>
  );
};

export default ListTab;
