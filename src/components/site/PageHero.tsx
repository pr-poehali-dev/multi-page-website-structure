interface PageHeroProps {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
}

const PageHero = ({ kicker, title, subtitle }: PageHeroProps) => {
  return (
    <section className="pt-36 pb-12 md:pt-44 md:pb-16 container">
      <p className="flex items-center gap-3 text-sm font-600 uppercase tracking-[0.2em] text-primary animate-fade-in">
        <span className="h-px w-10 bg-primary" /> {kicker}
      </p>
      <h1
        className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] font-600 mt-6 animate-fade-up text-balance"
        style={{ animationDelay: '0.1s', opacity: 0 }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="mt-8 text-lg text-muted-foreground max-w-2xl animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          {subtitle}
        </p>
      )}
    </section>
  );
};

export default PageHero;
