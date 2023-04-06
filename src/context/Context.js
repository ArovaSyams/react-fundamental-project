import { createContext, useContext, useEffect, useReducer } from "react";

// make a context
export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function reducer(state, action) {
  switch (action.type) {
    case 'updateUser':
      return {...state, user: action.payload};
    case 'toggleTheme':
      return {...state, theme: state.theme === 'Dark Theme' ? 'Light Theme' : 'Dark Theme'};
    default:
      throw new Error(`unhandled action type: {acton.type}`);
  }
}

const initialState = {
  user: {},
  theme: 'Dark theme'
}

export function AppProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [user, setUser] = useState({});
  // const [theme, setTheme] = useState('Dark theme');

  useEffect(() => {
    const user = {
      name: 'Wifqo Arova Syams',
      avatar: 'Ini avatar'
    }

    dispatch({
      type: 'updateUser',
      payload: user
    })
  }, []);
  
  const appContextValue = [state, dispatch];

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}