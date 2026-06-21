import Icon from '@/components/ui/icon';
import PageHero from '@/components/site/PageHero';

const CHANNELS = [
  { icon: 'Mail', label: 'Почта', value: 'hello@example.com', href: 'mailto:hello@example.com' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (000) 000-00-00', href: 'tel:+70000000000' },
  { icon: 'Send', label: 'Telegram', value: '@kirahain', href: '#' },
];

const Contacts = () => {
  return (
    <>
      <PageHero
        kicker="Контакты"
        title={
          <>
            Давайте начнём <span className="italic text-primary">диалог</span>
          </>
        }
        subtitle="Расскажите о своей задаче — отвечу в течение дня и предложу подходящий формат работы."
      />

      <section className="container pb-28 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5 space-y-4">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex items-center gap-4 bg-card border border-border rounded-2xl p-6 hover:border-primary transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon name={c.icon} size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{c.label}</p>
                <p className="font-display text-xl font-600">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <form className="md:col-span-7 bg-card border border-border rounded-[2rem] p-8 md:p-10 space-y-5">
          <h2 className="font-display text-3xl font-600">Напишите мне</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-500 text-muted-foreground">Имя</label>
              <input
                type="text"
                placeholder="Как к вам обращаться"
                className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-500 text-muted-foreground">Почта</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-500 text-muted-foreground">Сообщение</label>
            <textarea
              rows={5}
              placeholder="Расскажите о вашей задаче"
              className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-600 hover:opacity-90 transition-opacity"
          >
            Отправить <Icon name="ArrowRight" size={18} />
          </button>
        </form>
      </section>
    </>
  );
};

export default Contacts;
