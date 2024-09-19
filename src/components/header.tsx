const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__logo">
            <a href="/" className="header__link">
              <span>la ville </span>
              <span>Man</span>
            </a>
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#">
                  histoire de la ville
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">
                  sites à visiter
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">
                  évènements
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">
                  actualités
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">
                  carte
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
