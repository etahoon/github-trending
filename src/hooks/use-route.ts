import { useLocation } from 'react-router-dom';

import { ROUTES } from 'constant';

const useRoute = () => {
  const { pathname } = useLocation();

  return {
    isRepoPage: pathname === ROUTES.REPOS,
    isDeveloperPage: pathname === ROUTES.DEVELOPERS,
    pathname,
  };
};

export default useRoute;
