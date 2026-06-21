import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import PageHero from '@/components/site/PageHero';
import { SERVICES } from '@/components/site/data';

const Services = () => {
  return (
    <>
      <PageHero
        kicker="Услуги"
        title={
          <>
            Три формата, <span className="italic text-primary">которые усиливают</span> друг друга
          </>
        }
        subtitle="Можно выбрать один формат или совместить их под вашу задачу — индивидуально, для команды или для события."
      />

      <section className="container pb-28 space-y-6">
        {SERVICES.map((s) => (
          <div
            key={s.num}
            className="grid md:grid-cols-12 gap-8 bg-card rounded-[2rem] p-8 md:p-12 border border-border"
          >
            <div className="md:col-span-4 flex items-start gap-5">
              <span className="font-display text-6xl text-primary/30 font-600">{s.num}</span>
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-2">
                <Icon name={s.icon} size={26} />
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl font-600">{s.title}</h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-xl">{s.desc}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {s.details.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-foreground">
                    <Icon name="Check" size={18} className="text-primary shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 text-primary font-600 mt-8"
              >
                Обсудить формат <Icon name="ArrowRight" size={18} />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="container pb-28">
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-16 text-center grain">
          <h2 className="font-display text-4xl md:text-6xl font-500 text-balance">
            Не уверены, что выбрать?
          </h2>
          <p className="mt-5 text-background/70 max-w-md mx-auto">
            Напишите мне — вместе подберём формат под вашу задачу и цели.
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-600 mt-9 hover:opacity-90 transition-opacity"
          >
            Связаться <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
