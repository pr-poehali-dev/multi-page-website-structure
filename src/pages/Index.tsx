import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/bcc615f5-e036-45f4-a39c-fb67c17cc59a/files/40055ea8-ed48-44a0-a9ac-35b6b99e0c01.jpg';

const NAV = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Выступления', href: '#talks' },
  { label: 'Статьи', href: '#articles' },
  { label: 'Контакты', href: '#contacts' },
];

const SERVICES = [
  {
    num: '01',
    icon: 'Compass',
    title: 'Коучинг',
    desc: 'Индивидуальная работа над целями, карьерой и личной эффективностью.',
  },
  {
    num: '02',
    icon: 'GraduationCap',
    title: 'Обучение',
    desc: 'Программы и курсы для команд и руководителей в области HR и развития людей.',
  },
  {
    num: '03',
    icon: 'Mic',
    title: 'Выступления',
    desc: 'Лекции, мастер-классы и доклады на конференциях и корпоративных событиях.',
  },
];

const TALKS = [
  { title: 'Как строить культуру доверия в команде', place: 'HR-конференция «Люди и смыслы»', year: '2024' },
  { title: 'Лидерство без выгорания', place: 'Бизнес-форум «Точка роста»', year: '2024' },
  { title: 'Будущее профессии: навыки, которые не устареют', place: 'TEDx talk', year: '2023' },
];

const ARTICLES = [
  { tag: 'Коучинг', title: '5 вопросов, которые меняют разговор с собой', read: '6 мин' },
  { tag: 'Карьера', title: 'Почему «найти себя» — плохая стратегия', read: '8 мин' },
  { tag: 'Команды', title: 'Обратная связь, которую хочется услышать', read: '5 мин' },
];

const MARQUEE = ['Коучинг', '·', 'Обучение', '·', 'Выступления', '·', 'Развитие людей', '·', 'Лидерство', '·'];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background grain overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <a href="#" className="font-display text-2xl font-700 tracking-tight">
            Кира&nbsp;Хаин
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-500 text-muted-foreground hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacts"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-600 hover:opacity-90 transition-opacity"
          >
            Связаться
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Меню">
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-500 text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 z-10">
            <p className="flex items-center gap-3 text-sm font-600 uppercase tracking-[0.2em] text-primary animate-fade-in">
              <span className="h-px w-10 bg-primary" /> Коуч · Преподаватель · Спикер
            </p>
            <h1
              className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-600 mt-6 animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              Помогаю людям
              <br />
              <span className="italic text-primary">расти</span> осознанно
            </h1>
            <p
              className="mt-8 text-lg text-muted-foreground max-w-md animate-fade-up"
              style={{ animationDelay: '0.25s', opacity: 0 }}
            >
              Коучинг, обучающие программы и выступления для тех, кто хочет
              развивать себя и свои команды без выгорания.
            </p>
            <div
              className="mt-10 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-600 hover:opacity-90 transition-opacity"
              >
                Мои услуги <Icon name="ArrowRight" size={18} />
              </a>
              <a
                href="#talks"
                className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-4 rounded-full font-600 hover:bg-secondary transition-colors"
              >
                Выступления
              </a>
            </div>
          </div>

          <div className="md:col-span-5 relative animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img src={HERO_IMG} alt="Кира Хаин" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-2xl px-6 py-5 shadow-xl">
              <p className="font-display text-4xl font-700 leading-none">12+</p>
              <p className="text-xs mt-1 opacity-90">лет в развитии людей</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-6 bg-foreground text-background overflow-hidden border-y border-foreground">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i} className="font-display text-2xl md:text-3xl italic mx-5">
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 container">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary">Обо мне</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-5xl font-500 leading-tight text-balance">
              Я верю, что развитие — это не про «стать лучше», а про то, чтобы
              стать <span className="italic text-primary">собой</span>.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              Более 12 лет я работаю с руководителями, командами и специалистами,
              которые ищут ясность в карьере и жизни. Соединяю коучинг, обучение и
              публичные выступления, чтобы знания превращались в реальные изменения.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-secondary/40">
        <div className="container">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-display text-4xl md:text-6xl font-500">Услуги</h2>
            <p className="hidden md:block text-muted-foreground max-w-xs text-right">
              Три формата работы, которые усиливают друг друга
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.num}
                className="group bg-card rounded-3xl p-8 border border-border hover:border-primary transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl text-primary/30 font-600">{s.num}</span>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon name={s.icon} size={22} />
                  </div>
                </div>
                <h3 className="font-display text-3xl font-600 mt-6">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TALKS */}
      <section id="talks" className="py-24 container">
        <div className="flex items-end justify-between mb-14">
          <h2 className="font-display text-4xl md:text-6xl font-500">Выступления</h2>
          <a href="#" className="text-sm font-600 text-primary inline-flex items-center gap-1">
            Все записи <Icon name="ArrowUpRight" size={16} />
          </a>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {TALKS.map((t) => (
            <a
              key={t.title}
              href="#"
              className="group flex flex-col md:flex-row md:items-center justify-between gap-3 py-7 hover:bg-secondary/40 px-4 -mx-4 rounded-2xl transition-colors"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-display text-2xl text-muted-foreground">{t.year}</span>
                <h3 className="font-display text-2xl md:text-3xl font-600 group-hover:text-primary transition-colors">
                  {t.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{t.place}</span>
                <Icon name="Play" size={18} className="text-primary" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="py-24 bg-secondary/40">
        <div className="container">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-display text-4xl md:text-6xl font-500">Статьи</h2>
            <a href="#" className="text-sm font-600 text-primary inline-flex items-center gap-1">
              Все статьи <Icon name="ArrowUpRight" size={16} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ARTICLES.map((a) => (
              <a
                key={a.title}
                href="#"
                className="group bg-card rounded-3xl p-8 border border-border hover:-translate-y-1 transition-transform flex flex-col"
              >
                <span className="self-start text-xs font-600 uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {a.tag}
                </span>
                <h3 className="font-display text-2xl font-600 mt-6 leading-snug group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <div className="mt-auto pt-8 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{a.read} чтения</span>
                  <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACTS */}
      <section id="contacts" className="py-28 container">
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden grain">
          <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary">Контакты</p>
          <h2 className="font-display text-4xl md:text-7xl font-500 mt-6 text-balance">
            Давайте начнём <span className="italic text-primary">диалог</span>
          </h2>
          <p className="mt-6 text-background/70 max-w-md mx-auto">
            Расскажите о своей задаче — подберу формат работы, который подойдёт именно вам.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-600 mt-10 hover:opacity-90 transition-opacity"
          >
            Написать мне <Icon name="Mail" size={18} />
          </a>
          <div className="flex items-center justify-center gap-6 mt-10">
            {['Send', 'Youtube', 'Instagram', 'Linkedin'].map((s) => (
              <a key={s} href="#" className="text-background/60 hover:text-primary transition-colors">
                <Icon name={s} size={22} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display text-xl text-foreground">Кира Хаин</span>
          <span>© {new Date().getFullYear()} · Коучинг, обучение и выступления</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
