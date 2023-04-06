import { useEffect } from "react";
import { useAppContext } from "../context/Context";
import Setting from "../components/Setting";
import Theme from "../components/Theme";
import ToggleTheme from "../components/ToggleTheme";


export default function Home() {
  useEffect(function() {
    document.title = 'Home'
  }, []);

  const [state] = useAppContext();

  return (
    <section className="section">
      <Theme/>
      <ToggleTheme/>
      <h3>Selamat datang, {state.user.name}</h3>
      <Setting />
      <h1 className="section-title">Selamat datang di website ku</h1>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis architecto dicta reprehenderit molestias temporibus tempore enim voluptatum sunt, odio quisquam pariatur iste expedita quidem officiis! Blanditiis mollitia cum iusto.</p>
    </section>
  )
}