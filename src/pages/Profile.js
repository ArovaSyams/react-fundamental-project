import { useEffect } from "react";

export default function Profile() {
  useEffect(function() {
    document.title = 'Profile'
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Profile tentang diriku</h1>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis architecto dicta reprehenderit molestias temporibus tempore enim voluptatum sunt, odio quisquam pariatur iste expedita quidem officiis! Blanditiis mollitia cum iusto.</p>
    </section>
  )
}