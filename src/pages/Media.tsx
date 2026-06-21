import PageHero from '@/components/site/PageHero';
import { MEDIA } from '@/components/site/data';
import Icon from '@/components/ui/icon';

const TYPE_COLORS: Record<string, string> = {
  Подкаст: 'bg-accent/10 text-accent',
  Интервью: 'bg-primary/10 text-primary',
  Статья: 'bg-secondary text-foreground',
};

const Media = () => {
  return (
    <>
      <PageHero
        kicker="Медиа"
        title={
          <>
            В прессе и <span className="italic text-primary">подкастах</span>
          </>
        }
        subtitle="Интервью, статьи и выступления в медиа — о коучинге, выгорании и развитии людей."
      />

      <section className="container pb-24">
        <div className="divide-y divide-border border-y border-border">
          {MEDIA.map((m) => (
            <a
              key={m.title}
              href="#"
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-7 hover:bg-secondary/40 px-4 -mx-4 rounded-2xl transition-colors"
            >
              <div className="flex items-center gap-5">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={m.icon} size={20} />
                </div>
                <div>
                  <span
                    className={`text-xs font-600 uppercase tracking-wider px-2.5 py-1 rounded-full ${TYPE_COLORS[m.type] ?? 'bg-secondary text-foreground'}`}
                  >
                    {m.type}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-600 mt-1.5 group-hover:text-primary transition-colors">
                    {m.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-6 text-muted-foreground md:shrink-0">
                <span className="text-sm">{m.where}</span>
                <span className="text-sm">{m.year}</span>
                <Icon name="ExternalLink" size={18} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="container pb-28">
        <div className="bg-card border border-border rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm font-600 uppercase tracking-[0.2em] text-primary">Для журналистов и подкастеров</p>
            <h2 className="font-display text-3xl md:text-4xl font-600 mt-4 text-balance">
              Приглашаю к диалогу
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              Готова к интервью и комментариям по темам коучинга, HR, выгорания и развития руководителей.
            </p>
          </div>
          <a
            href="mailto:hello@example.com"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-600 hover:opacity-90 transition-opacity"
          >
            Написать <Icon name="Mail" size={18} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Media;
