import { useMemo } from 'react';
import { useQuery } from 'react-query';

import { Repo } from 'models/repo';

const useFetchRepos = ({ language = '' } = {}) => {
  const { isLoading, data = [] } = useQuery<Repo[], Error>('reposData', () =>
    fetch('/repositories').then(res => res.json())
  );

  const languages = useMemo(() => {
    const languagesSet = new Set<string>(data.map(({ language }) => language));
    return Array.from(languagesSet);
  }, [data]);

  const repos = useMemo(
    () => (!language ? data : data.filter(repo => repo.language === language)),
    [data, language]
  );

  return {
    isLoading,
    repos,
    data,
    languages,
  };
};

export default useFetchRepos;
