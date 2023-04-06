import { createContext, useContext, useReducer } from "react";

// make a context
export const ThemeContext = createContext({});

export function useThemeContext() {
  return useContext(ThemeContext);
}

// pabrik untuk mengeksekusi state baru
export function reducer(state, action) {
  switch (action.type) {
    case 'toggleTheme':
      return {...state, theme: state.theme === 'Dark Theme' ? 'Light Theme' : 'Dark Theme'};
    default:
      throw new Error(`unhandled action type: {acton.type}`);
  }
}

const initialState = {
  theme: 'Dark theme'
}

export function ThemeProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [user, setUser] = useState({});
  // const [theme, setTheme] = useState('Dark theme');
  
  const appContextValue = [state, dispatch];

  return (
    <ThemeContext.Provider value={appContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}