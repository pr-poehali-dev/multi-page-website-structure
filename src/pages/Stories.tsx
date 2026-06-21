import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import PageHero from '@/components/site/PageHero';
import { STORIES } from '@/components/site/data';

const Stories = () => {
  return (
    <>
      <PageHero
        kicker="Истории клиентов"
        title={
          <>
            Реальные изменения — <span className="italic text-primary">реальные люди</span>
          </>
        }
        subtitle="Имена изменены с согласия клиентов. Истории — настоящие."
      />

      <section className="container pb-24 space-y-8">
        {STORIES.map((s, i) => (
          <div
            key={s.name}
            className={`grid md:grid-cols-12 gap-8 rounded-[2rem] p-8 md:p-14 border ${
              i % 2 === 1 ? 'bg-foreground text-background border-foreground' : 'bg-card border-border'
            }`}
          >
            <div className="md:col-span-4 flex flex-col justify-between gap-6">
              <div>
                <div
                  className={`h-16 w-16 rounded-full flex items-center justify-center font-display text-2xl font-700 ${
                    i % 2 === 1 ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                  }`}
                >
                  {s.name[0]}
                </div>
                <p className="font-display text-2xl font-600 mt-5">{s.name}</p>
                <p className={`text-sm mt-1 ${i % 2 === 1 ? 'text-background/60' : 'text-muted-foreground'}`}>
                  {s.role} · {s.company}
                </p>
              </div>
              <div className={`rounded-2xl px-5 py-4 ${i % 2 === 1 ? 'bg-background/10' : 'bg-secondary'}`}>
                <p className={`text-xs font-600 uppercase tracking-wider mb-1 ${i % 2 === 1 ? 'text-primary' : 'text-primary'}`}>
                  Результат
                </p>
                <p className={`text-sm font-500 ${i % 2 === 1 ? 'text-background' : 'text-foreground'}`}>
                  {s.result}
                </p>
              </div>
            </div>
            <div className="md:col-span-8 flex items-center">
              <div>
                <Icon name="Quote" size={40} className={`mb-5 ${i % 2 === 1 ? 'text-primary/40' : 'text-primary/20'}`} />
                <p className={`font-display text-2xl md:text-3xl font-400 italic leading-snug ${i % 2 === 1 ? 'text-background' : 'text-foreground'}`}>
                  {s.quote}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="container pb-28">
        <div className="bg-secondary/50 rounded-[2rem] p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-500 text-balance">
            Хотите написать свою историю?
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md mx-auto">
            Первая консультация — это просто разговор. Без обязательств и давления.
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-600 mt-8 hover:opacity-90 transition-opacity"
          >
            Начать <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Stories;
