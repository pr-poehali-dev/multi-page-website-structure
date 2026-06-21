import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { NAV } from './Header';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-16 grid md:grid-cols-3 gap-10">
        <div>
          <Link to="/" className="font-display text-3xl font-700">
            Кира Хаин
          </Link>
          <p className="mt-4 text-muted-foreground max-w-xs">
            Коучинг, обучающие программы и выступления для осознанного развития.
          </p>
          <div className="flex items-center gap-4 mt-6">
            {['Send', 'Youtube', 'Instagram', 'Linkedin'].map((s) => (
              <a key={s} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name={s} size={22} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary mb-5">Навигация</p>
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-primary transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary mb-5">Контакты</p>
          <a
            href="mailto:hello@example.com"
            className="block text-muted-foreground hover:text-primary transition-colors"
          >
            hello@example.com
          </a>
          <a href="tel:+70000000000" className="block mt-3 text-muted-foreground hover:text-primary transition-colors">
            +7 (000) 000-00-00
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-6 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Кира Хаин · Коучинг, обучение и выступления
        </div>
      </div>
    </footer>
  );
};

export default Footer;
