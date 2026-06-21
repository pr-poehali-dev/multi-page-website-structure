import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { HERO_IMG, SERVICES, TALKS, ARTICLES, TOPICS, STORIES, PROGRAMS } from '@/components/site/data';

const MARQUEE = ['Коучинг', '·', 'Обучение', '·', 'Выступления', '·', 'Развитие людей', '·', 'Лидерство', '·'];

const Index = () => {
  return (
    <>
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
              <Link
                to="/topics"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-600 hover:opacity-90 transition-opacity"
              >
                Узнать себя <Icon name="ArrowRight" size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-4 rounded-full font-600 hover:bg-secondary transition-colors"
              >
                О Кире
              </Link>
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

      {/* ABOUT TEASER */}
      <section className="py-24 container">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary">О Кире</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-5xl font-500 leading-tight text-balance">
              Я верю, что развитие — это не про «стать лучше», а про то, чтобы
              стать <span className="italic text-primary">собой</span>.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              Более 12 лет я работаю с руководителями, командами и специалистами,
              которые ищут ясность в карьере и жизни.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-600 mt-6">
              Подробнее <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-24 bg-foreground text-background">
        <div className="container">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary mb-4">Запросы</p>
              <h2 className="font-display text-4xl md:text-6xl font-500">С чем приходят ко мне</h2>
            </div>
            <Link to="/topics" className="hidden md:inline-flex items-center gap-1 text-sm font-600 text-primary">
              Все запросы <Icon name="ArrowUpRight" size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {TOPICS.slice(0, 3).map((t) => (
              <Link
                to="/topics"
                key={t.title}
                className="group bg-background/5 border border-background/10 hover:border-primary rounded-2xl p-6 transition-colors"
              >
                <div className="h-11 w-11 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-5">
                  <Icon name={t.icon} size={20} />
                </div>
                <h3 className="font-display text-xl font-600 group-hover:text-primary transition-colors">{t.title}</h3>
                <p className="mt-2 text-background/60 text-sm leading-relaxed line-clamp-2">{t.desc}</p>
              </Link>
            ))}
          </div>
          <Link
            to="/topics"
            className="mt-8 inline-flex items-center gap-2 text-primary font-600 md:hidden"
          >
            Все запросы <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 container">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary mb-4">Программы</p>
            <h2 className="font-display text-4xl md:text-6xl font-500">Форматы работы</h2>
          </div>
          <Link to="/programs" className="hidden md:inline-flex items-center gap-1 text-sm font-600 text-primary">
            Все программы <Icon name="ArrowUpRight" size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PROGRAMS.map((p) => (
            <Link
              to="/programs"
              key={p.title}
              className={`group rounded-3xl p-8 border transition-all hover:-translate-y-1 flex flex-col ${
                p.accent ? 'bg-foreground text-background border-foreground' : 'bg-card border-border hover:border-primary'
              }`}
            >
              <span className={`self-start text-xs font-600 uppercase tracking-wider px-3 py-1 rounded-full ${
                p.accent ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
              }`}>
                {p.badge}
              </span>
              <h3 className="font-display text-2xl font-600 mt-5">{p.title}</h3>
              <p className={`mt-2 text-sm ${p.accent ? 'text-background/70' : 'text-muted-foreground'}`}>{p.duration} · {p.sessions}</p>
              <p className={`mt-4 text-sm leading-relaxed ${p.accent ? 'text-background/80' : 'text-muted-foreground'}`}>{p.desc}</p>
              <span className="mt-auto pt-6 inline-flex items-center gap-1 text-primary text-sm font-600 group-hover:gap-2 transition-all">
                Подробнее <Icon name="ArrowRight" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* STORIES TEASER */}
      <section className="py-24 bg-secondary/40">
        <div className="container">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary mb-4">Истории клиентов</p>
              <h2 className="font-display text-4xl md:text-6xl font-500">Реальные изменения</h2>
            </div>
            <Link to="/stories" className="hidden md:inline-flex items-center gap-1 text-sm font-600 text-primary">
              Все истории <Icon name="ArrowUpRight" size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {STORIES.map((s) => (
              <Link
                key={s.name}
                to="/stories"
                className="group bg-card rounded-3xl p-8 border border-border hover:border-primary transition-colors flex flex-col"
              >
                <Icon name="Quote" size={32} className="text-primary/20 mb-5" />
                <p className="font-display text-xl italic leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-4">
                  {s.quote}
                </p>
                <div className="mt-auto pt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-700 text-primary">
                    {s.name[0]}
                  </div>
                  <div>
                    <p className="font-600 text-sm">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.role}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TALKS TEASER */}
      <section className="py-24 container">
        <div className="flex items-end justify-between mb-14">
          <h2 className="font-display text-4xl md:text-6xl font-500">Выступления</h2>
          <Link to="/talks" className="text-sm font-600 text-primary inline-flex items-center gap-1">
            Все записи <Icon name="ArrowUpRight" size={16} />
          </Link>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {TALKS.slice(0, 3).map((t) => (
            <Link
              key={t.title}
              to="/talks"
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
            </Link>
          ))}
        </div>
      </section>

      {/* ARTICLES TEASER */}
      <section className="py-24 bg-secondary/40">
        <div className="container">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-display text-4xl md:text-6xl font-500">Статьи</h2>
            <Link to="/articles" className="text-sm font-600 text-primary inline-flex items-center gap-1">
              Все статьи <Icon name="ArrowUpRight" size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ARTICLES.slice(0, 3).map((a) => (
              <Link
                key={a.title}
                to="/articles"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 container">
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden grain">
          <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary">Контакты</p>
          <h2 className="font-display text-4xl md:text-7xl font-500 mt-6 text-balance">
            Давайте начнём <span className="italic text-primary">диалог</span>
          </h2>
          <p className="mt-6 text-background/70 max-w-md mx-auto">
            Расскажите о своей задаче — подберу формат работы, который подойдёт именно вам.
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-600 mt-10 hover:opacity-90 transition-opacity"
          >
            Связаться со мной <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
