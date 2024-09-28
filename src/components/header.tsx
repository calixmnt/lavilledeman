import { HiOutlineMenuAlt4 } from "react-icons/hi";

import { useState } from 'react';

interface NavItem {
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  { label: "Sites à visiter", link: "#sites" },
  { label: "Actualités", link: "#news" },
  { label: "Événements", link: "#events" },
  { label: "Histoire de la ville", link: "#city-story" },
  { label: "Carte", link: "#city-map" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container header">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/" className="header__link">
            <span>la ville </span>
            <span>Man</span>
          </a>
        </div>
        <div className="nav__hamburger" onClick={toggleMenu}>
          <HiOutlineMenuAlt4 width={30} height={30}/>
        </div>
        <nav className={`nav ${isMenuOpen && 'nav--open'}`}>
          <ul className="nav__list">
            {navItems.map((navItem, i) => (
              <li key={i} className="nav__item">
                <a className="nav__link" href={navItem.link}>
                  {navItem.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
