import { mount } from 'enzyme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import darkTheme from 'styles/dark-theme';
import Repos from '.';
import List from 'components/list';
import Filter from 'components/filter';

const initWrapper = () => {
  const queryClient = new QueryClient();
  return mount(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <MemoryRouter>
          <Repos />
        </MemoryRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

describe('<Repos/>', () => {
  afterEach(() => jest.clearAllMocks());

  it('should renders the components', () => {
    const wrapper = initWrapper();
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should renders the child components', () => {
    const wrapper = initWrapper();
    expect(wrapper.find(List).exists()).toBeTruthy();
    expect(wrapper.find(Filter).exists()).toBeTruthy();
  });
});
