import { useQuery } from 'react-query';

const useFetchDevelopers = () => {
  const { isLoading, data = [] } = useQuery('developersData', () =>
    fetch('/developers').then(res => res.json())
  );

  return {
    isLoading,
    data,
  };
};

export default useFetchDevelopers;
