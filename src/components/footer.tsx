import { cities } from "../lib/constant.ts";
import CircleSpan from "./circlespan.tsx";

const Footer = () => {
  return (
    <footer className="container footer">
      <div className="footer__top">
        {cities.map((city, i) => (
          <div className="footer__time">
            <p>13:31</p>
            <CircleSpan key={i} label={city} />
          </div>
        ))}
      </div>

      <div className="footer__newsletter">
        <p>RESTER AU COURANT, INSCRIVEZ VOUS A LA NEWSLETTER</p>
        <form className="footer__form">
          <input type="email" placeholder="Email" />
          <button type="submit">→</button>
        </form>
      </div>

      <div className="footer__copyright">
        <p>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a target="_blank" href="https://github.com/calixmnt">Calixx</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
