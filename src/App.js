import './App.css';
import { Link, Outlet} from 'react-router-dom';
import { AppProvider } from './context/Context';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  

  return (
    <AppProvider>
      <ThemeProvider>
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
    </ThemeProvider>
    </AppProvider>
  );
}

export default App;
