import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export const NAV_PRIMARY = [
  { label: 'О Кире', to: '/about' },
  { label: 'Запросы', to: '/topics' },
  { label: 'Услуги', to: '/services' },
  { label: 'Программы', to: '/programs' },
  { label: 'Выступления', to: '/talks' },
];

export const NAV_SECONDARY = [
  { label: 'Истории клиентов', to: '/stories' },
  { label: 'Медиа', to: '/media' },
  { label: 'Статьи', to: '/articles' },
  { label: 'Контакты', to: '/contacts' },
];

export const NAV = [...NAV_PRIMARY, ...NAV_SECONDARY];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-background/70 border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="font-display text-2xl font-700 tracking-tight shrink-0">
          Кира&nbsp;Хаин
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_PRIMARY.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm font-500 transition-colors whitespace-nowrap ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <div className="relative">
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-500 text-muted-foreground hover:text-primary transition-colors"
            >
              Ещё <Icon name={moreOpen ? 'ChevronUp' : 'ChevronDown'} size={14} />
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-2xl shadow-xl py-2 min-w-[180px] animate-fade-in">
                {NAV_SECONDARY.map((n) => (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    onClick={() => setMoreOpen(false)}
                    className={({ isActive }) =>
                      `block px-5 py-2.5 text-sm transition-colors ${
                        isActive ? 'text-primary font-600' : 'text-foreground hover:text-primary'
                      }`
                    }
                  >
                    {n.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <Link
          to="/contacts"
          className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-600 hover:opacity-90 transition-opacity shrink-0"
        >
          Связаться
        </Link>

        <button className="lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Меню">
          <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-1 animate-fade-in">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-2.5 text-base font-500 border-b border-border/50 last:border-0 transition-colors ${
                  isActive ? 'text-primary' : 'text-foreground'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Link
            to="/contacts"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-600"
          >
            Связаться
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
