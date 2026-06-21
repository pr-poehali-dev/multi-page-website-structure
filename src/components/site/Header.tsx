import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export const NAV = [
  { label: 'Обо мне', to: '/about' },
  { label: 'Услуги', to: '/services' },
  { label: 'Выступления', to: '/talks' },
  { label: 'Статьи', to: '/articles' },
  { label: 'Контакты', to: '/contacts' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-background/70 border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="font-display text-2xl font-700 tracking-tight">
          Кира&nbsp;Хаин
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm font-500 transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contacts"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-600 hover:opacity-90 transition-opacity"
        >
          Связаться
        </Link>
        <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Меню">
          <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              onClick={() => setMenuOpen(false)}
              className="text-base font-500 text-foreground"
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
