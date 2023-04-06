import { useAppContext } from "../context/Context"

export default function ToggleTheme() {
  const [, dispatch] = useAppContext();

  return (<button onClick={() => dispatch({type: 'toggleTheme'})}>Change theme</button>)
}