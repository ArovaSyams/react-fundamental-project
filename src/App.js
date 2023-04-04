import './App.css';
import { Link, Outlet} from 'react-router-dom';
import { AppContext } from './context/Context';
import { useContext, useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = {
      name: 'Wifqo Arova',
      avatar: 'Ini avatar'
    }

    setUser(user);
  }, []);
  
  const appContextValue = {
    user: user,
    theme: 'dark'
  }

  return (
    <AppContext.Provider value={appContextValue}>
    <div className="app">
      <div className='brand'>ArovaStack</div>
      <nav className='nav'>
        <Link to={`/`} className="nav-item">Home</Link>
        <Link to={`/profile`} className="nav-item">Profile</Link>
        <Link to={`/Blog`} className="nav-item">Blog</Link>
        <Link to={`/Contact`} className="nav-item">Contact</Link>
      </nav>

      <div>
        <Outlet/>
      </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;
