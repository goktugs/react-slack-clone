import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Container from './layout/Container';
import Main from './layout/Main';

function App({ children }) {
  return (
    <Router>
      <Container>
        <Header />
        <Main>
          <Sidebar />
          <Switch>
            <Route path="/room">
              <Chat />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Main>
      </Container>
    </Router>
  );
}

export default App;
