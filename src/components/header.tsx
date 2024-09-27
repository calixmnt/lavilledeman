interface NavItem {
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  { label: "Sites à visiter", link: "#" },
  { label: "Actualités", link: "#" },
  { label: "Événements", link: "#" },
  { label: "Histoire de la ville", link: "#" },
  { label: "Carte", link: "#" },
];

const Header = () => {
  return (
    <header className="container header">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/" className="header__link">
            <span>la ville </span>
            <span>Man</span>
          </a>
        </div>
        <nav className="nav">
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
