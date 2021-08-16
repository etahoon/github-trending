import React, { useState, useEffect } from 'react';

import { Div, P } from 'components/html';
import ListTab from './tab';
import useRoute from 'hooks/use-route';
import { ROUTES } from 'constant';

const tabs = [
  { id: 0, name: 'Repositories', pathname: ROUTES.REPOS },
  { id: 1, name: 'Developers', pathname: ROUTES.DEVELOPERS },
];

const getVariant = (index, length) =>
  index === 0 ? 'first' : index === length - 1 ? 'last' : null;

const HeaderTabs = () => {
  const [active, setActive] = useState(null);
  const { pathname } = useRoute();

  useEffect(() => {
    const tab = tabs.find(tab => tab.pathname === pathname);
    setActive(tab?.id);
  }, [pathname]);

  return (
    <Div>
      {tabs.map((t, index) => (
        <ListTab
          key={t.name}
          {...t}
          variant={getVariant(index, tabs.length)}
          active={t.id === active}
        />
      ))}
    </Div>
  );
};

export default HeaderTabs;
