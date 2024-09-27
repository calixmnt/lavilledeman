const Footer = () => {
  return (
    <footer className="container footer">
      <div className="footer__top">
        <div className="footer__time">
          <p>13:31</p>
          <span>ABIDJAN</span>
        </div>
        <div className="footer__time">
          <p>07:31</p>
          <span>COPENHAGEN</span>
        </div>
        <div className="footer__time">
          <p>13:31</p>
          <span>PARIS</span>
        </div>
        <div className="footer__time">
          <p>20:31</p>
          <span>HONG KONG</span>
        </div>
        <div className="footer__time">
          <p>13:31</p>
          <span>OSLO</span>
        </div>
      </div>

      <div className="footer__newsletter">
        <p>STAY IN THE KNOW. SUBSCRIBE TO OUR NEWSLETTER</p>
        <form className="footer__form">
          <input type="email" placeholder="Email" />
          <button type="submit">→</button>
        </form>
      </div>

      <div className="footer__bottom">
        <div className="footer__links">
          <p>News</p>
          <p>About us</p>
          <p>Services</p>
        </div>
        <div className="footer__links">
          <p>Projects</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p>A part of Ramboll Group</p>
      </div>
    </footer>
  );
};

export default Footer;
