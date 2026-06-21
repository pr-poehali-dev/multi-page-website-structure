import Icon from '@/components/ui/icon';
import PageHero from '@/components/site/PageHero';
import { ARTICLES } from '@/components/site/data';

const Articles = () => {
  return (
    <>
      <PageHero
        kicker="Статьи"
        title={
          <>
            Мысли о развитии, <span className="italic text-primary">карьере и командах</span>
          </>
        }
        subtitle="Короткие тексты с практическими идеями — для тех, кто растёт сам и развивает других."
      />

      <section className="container pb-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </section>
    </>
  );
};

export default Articles;
