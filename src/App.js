import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import db, { auth } from './db/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

function App() {
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
        <div className="w-full h-screen grid grid-rows-container">
          <Header user={user} signOut={signOut} />
          <main className="grid grid-cols-main">
            {rooms.length && <Sidebar rooms={rooms} />}
            <Switch>
              <Route path="/room/:channelId">
                <Chat user={user} />
              </Route>
              <Route path="/">Select or Create Channel</Route>
              {/* <Route path="/" exact>
                <Login />
              </Route> */}
            </Switch>
          </main>
        </div>
      )}
    </Router>
  );
}

export default App;
