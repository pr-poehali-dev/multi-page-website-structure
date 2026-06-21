import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import PageHero from '@/components/site/PageHero';
import { PROGRAMS } from '@/components/site/data';

const Programs = () => {
  return (
    <>
      <PageHero
        kicker="Программы"
        title={
          <>
            Форматы работы под <span className="italic text-primary">разные задачи</span>
          </>
        }
        subtitle="Не знаете, что подойдёт — напишите, подберём вместе. Каждая программа адаптируется под вас."
      />

      <section className="container pb-28 grid md:grid-cols-3 gap-6 items-start">
        {PROGRAMS.map((p) => (
          <div
            key={p.title}
            className={`rounded-[2rem] p-8 md:p-10 flex flex-col border transition-all ${
              p.accent
                ? 'bg-foreground text-background border-foreground'
                : 'bg-card border-border hover:border-primary'
            }`}
          >
            <span
              className={`self-start text-xs font-600 uppercase tracking-wider px-3 py-1 rounded-full ${
                p.accent ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
              }`}
            >
              {p.badge}
            </span>

            <h2 className="font-display text-3xl font-600 mt-6">{p.title}</h2>

            <div className={`flex gap-4 mt-4 text-sm ${p.accent ? 'text-background/60' : 'text-muted-foreground'}`}>
              <span className="flex items-center gap-1.5">
                <Icon name="Clock" size={14} /> {p.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Layers" size={14} /> {p.sessions}
              </span>
            </div>

            <p className={`mt-5 leading-relaxed ${p.accent ? 'text-background/80' : 'text-muted-foreground'}`}>
              {p.desc}
            </p>

            <ul className="mt-6 space-y-3">
              {p.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Icon
                    name="Check"
                    size={16}
                    className={`mt-0.5 shrink-0 ${p.accent ? 'text-primary' : 'text-primary'}`}
                  />
                  <span className={`text-sm ${p.accent ? 'text-background/80' : 'text-foreground'}`}>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contacts"
              className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-600 transition-opacity hover:opacity-90 ${
                p.accent
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-foreground text-background'
              }`}
            >
              Записаться <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        ))}
      </section>

      <section className="container pb-28">
        <div className="bg-secondary/50 rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl md:text-4xl font-600">Нужна корпоративная программа?</h2>
            <p className="mt-3 text-muted-foreground">
              Разрабатываю программы под задачи конкретной компании — от одного мастер-класса до многомесячного сопровождения команды.
            </p>
          </div>
          <Link
            to="/contacts"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-600 hover:opacity-90 transition-opacity"
          >
            Обсудить <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Programs;
