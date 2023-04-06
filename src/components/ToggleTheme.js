import { useThemeContext } from "../context/ThemeContext";

export default function ToggleTheme() {
  const [, dispatch] = useThemeContext();

  return (<button onClick={() => dispatch({type: 'toggleTheme'})}>Change theme</button>)
}