import Icon from '@/components/ui/icon';
import PageHero from '@/components/site/PageHero';
import { TALKS } from '@/components/site/data';

const Talks = () => {
  return (
    <>
      <PageHero
        kicker="Выступления"
        title={
          <>
            Лекции, доклады и <span className="italic text-primary">мастер-классы</span>
          </>
        }
        subtitle="Выступаю на конференциях и корпоративных событиях о развитии людей, лидерстве и профилактике выгорания."
      />

      <section className="container pb-28">
        <div className="divide-y divide-border border-y border-border">
          {TALKS.map((t) => (
            <a
              key={t.title}
              href="#"
              className="group flex flex-col md:flex-row md:items-center justify-between gap-3 py-8 hover:bg-secondary/40 px-4 -mx-4 rounded-2xl transition-colors"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-display text-2xl text-muted-foreground">{t.year}</span>
                <h3 className="font-display text-2xl md:text-3xl font-600 group-hover:text-primary transition-colors">
                  {t.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{t.place}</span>
                <span className="inline-flex items-center gap-1 text-primary font-600">
                  <Icon name="Play" size={18} /> Запись
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-secondary/50 rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-600">Пригласить на выступление</h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              Подготовлю доклад или мастер-класс под формат и аудиторию вашего события.
            </p>
          </div>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-600 hover:opacity-90 transition-opacity shrink-0"
          >
            Написать <Icon name="Mail" size={18} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Talks;
