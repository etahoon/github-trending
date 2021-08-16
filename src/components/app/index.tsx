import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ThemeProvider } from 'styled-components';

import Header from 'components/header';
import Layout from 'components/layout';
import Repos from 'containers/repos';
import Developers from 'containers/developers';
import { GlobalStyle } from 'styles/global';

import darkTheme from 'styles/dark-theme';
import { ROUTES } from 'constant';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <Router>
            <Layout>
              <>
                <Header />

                <Switch>
                  <Route path={ROUTES.REPOS}>
                    <Repos />
                  </Route>
                  <Route path={ROUTES.DEVELOPERS}>
                    <Developers />
                  </Route>
                  <Redirect to={ROUTES.REPOS} />
                </Switch>
              </>
            </Layout>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
