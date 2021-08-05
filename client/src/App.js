import './App.css';
import { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import HomePage from './views/HomePage/HomePage';
import SignUp from './views/SignUp/SignUp';
import SignIn from './views/SignIn/SignIn';
import { verify } from './services/users';
import ViewPage from './views/ViewPage/ViewPage';
import CreatePlaylist from './views/FormPlaylist/CreatePlaylist';
import EditUser from './views/EditUser/EditUser';
import Categories from './views/Categories/Categories';
import AllPlaylist from './views/Categories/AllPlaylist';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify());
    }
    verifyUser();
  }, []);

  return (
    <div className="App">
      <Route exact path="/">
        <HomePage user={user} setUser={setUser} />
      </Route>
      <Route exact path="/categories/:id">
        <Categories user={user} setUser={setUser} />
      </Route>
      <Route exact path="/Discover-all">
        <AllPlaylist user={user} setUser={setUser} />
      </Route>
      <Route exact path="/preview/:id">
        <ViewPage user={user} setUser={setUser} />
      </Route>
      <Route exact path="/create-playlist">
        <CreatePlaylist user={user} setUser={setUser}/>
      </Route>
      {!user && (<>
        <Route path="/sign-in">
          <SignIn setUser={setUser} user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} user={user} />
        </Route>
        </>
  )
      }
      </div>
      )
      }

export default App;