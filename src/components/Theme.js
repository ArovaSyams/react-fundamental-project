
import { useThemeContext } from "../context/ThemeContext";

export default function Theme() {
  const [state] = useThemeContext();
  return <p>{state.theme}</p>
}