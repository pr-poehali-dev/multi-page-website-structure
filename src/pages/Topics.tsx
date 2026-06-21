import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import PageHero from '@/components/site/PageHero';
import { TOPICS } from '@/components/site/data';

const Topics = () => {
  return (
    <>
      <PageHero
        kicker="Запросы"
        title={
          <>
            С чем ко мне <span className="italic text-primary">приходят</span>
          </>
        }
        subtitle="Люди не приходят с запросом «хочу коучинг». Они приходят с живой болью или вопросом. Узнайте себя — и я расскажу, как мы можем работать."
      />

      <section className="container pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPICS.map((t) => (
            <div
              key={t.title}
              className="group bg-card rounded-3xl p-8 border border-border hover:border-primary hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Icon name={t.icon} size={26} />
              </div>
              <h3 className="font-display text-2xl font-600 group-hover:text-primary transition-colors">
                {t.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-600 uppercase tracking-wider bg-secondary text-foreground px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-28">
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center grain">
          <div>
            <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary">Не нашли свой запрос?</p>
            <h2 className="font-display text-3xl md:text-5xl font-500 mt-5 text-balance">
              Напишите — разберёмся вместе
            </h2>
            <p className="mt-5 text-background/70">
              Каждая ситуация уникальна. Иногда запрос формируется уже в первом разговоре.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-600 hover:opacity-90 transition-opacity"
            >
              Написать Кире <Icon name="ArrowRight" size={18} />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 border border-background/30 text-background px-7 py-4 rounded-full font-600 hover:bg-background/10 transition-colors"
            >
              Посмотреть программы
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topics;
