import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { NAV_PRIMARY, NAV_SECONDARY } from './Header';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
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
          <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary mb-5">Разделы</p>
          <ul className="space-y-3">
            {NAV_PRIMARY.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-primary transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary mb-5">Ещё</p>
          <ul className="space-y-3">
            {NAV_SECONDARY.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-primary transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary mb-3">Контакты</p>
            <a href="mailto:hello@example.com" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
              hello@example.com
            </a>
            <a href="tel:+70000000000" className="block mt-2 text-muted-foreground hover:text-primary transition-colors text-sm">
              +7 (000) 000-00-00
            </a>
          </div>
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
