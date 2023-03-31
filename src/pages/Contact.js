import { useEffect } from "react";

export default function Contact() {
  useEffect(function() {
    document.title = 'Contact'
  }, []);

  return (
  <section className="section">
    <h1 className="section-title">Hubungi saya </h1>
    <p className="section-description">Anda dapat menghubungi saya dibawah ini :</p>
    <ul>
      <li>No Handphone: 082745647228</li>
      <li>Email: wifqoarova@ganteng.com</li>
    </ul>
    <p className="section-description">Atau stalk sosmed saya disini:</p>
    <ul>
      <li><a href='http://www.facebook.com'>Facebook</a></li>
      <li><a href='http://www.instagram.com'>Instagram</a></li>
    </ul>
  </section>
  );
}