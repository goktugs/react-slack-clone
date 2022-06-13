import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Container from './layout/Container';
import Main from './layout/Main';

import db, { auth } from './db/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

function App({ children }) {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getRooms = async () => {
    const roomsCol = collection(db, 'rooms');
    const roomsSnapshot = await getDocs(roomsCol);
    const roomsList = roomsSnapshot.docs.map((doc) => doc.data());
    setRooms(roomsList);
  };
  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    });
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Header user={user} signOut={signOut} />
          <Main>
            {rooms.length && <Sidebar rooms={rooms} />}
            <Switch>
              <Route path="/room" exact>
                <Chat />
              </Route>
              {/* <Route path="/" exact>
                <Login />
              </Route> */}
            </Switch>
          </Main>
        </Container>
      )}
    </Router>
  );
}

export default App;
