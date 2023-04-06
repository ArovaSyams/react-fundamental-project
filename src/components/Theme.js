
import { useAppContext } from "../context/Context"

export default function Theme() {
  const [state] = useAppContext();
  return <p>{state.theme}</p>
}