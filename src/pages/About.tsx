import Icon from '@/components/ui/icon';
import PageHero from '@/components/site/PageHero';
import { HERO_IMG } from '@/components/site/data';

const VALUES = [
  { icon: 'Heart', title: 'Бережность', desc: 'Создаю пространство, где можно быть честным с собой без оценки.' },
  { icon: 'Target', title: 'Ясность', desc: 'Помогаю увидеть суть и сфокусироваться на главном.' },
  { icon: 'Sprout', title: 'Рост', desc: 'Знания превращаю в реальные изменения и привычки.' },
];

const FACTS = [
  { num: '12+', label: 'лет практики' },
  { num: '500+', label: 'клиентов и студентов' },
  { num: '40+', label: 'выступлений' },
];

const About = () => {
  return (
    <>
      <PageHero
        kicker="Обо мне"
        title={
          <>
            Я помогаю людям стать <span className="italic text-primary">собой</span>
          </>
        }
        subtitle="Коуч, преподаватель и спикер. Соединяю три формата работы, чтобы развитие было осознанным и устойчивым."
      />

      <section className="container pb-24 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 animate-fade-up" style={{ opacity: 0 }}>
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden sticky top-28">
            <img src={HERO_IMG} alt="Кира Хаин" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-7">
          <h2 className="font-display text-3xl md:text-4xl font-500 leading-snug text-balance">
            Более 12 лет я работаю с руководителями, командами и специалистами.
          </h2>
          <div className="mt-6 space-y-5 text-lg text-muted-foreground">
            <p>
              Мой путь начался в корпоративном HR, где я увидела: люди раскрываются
              не от давления, а от поддержки и ясных целей. С тех пор я объединила
              коучинг, обучение и публичные выступления в одну практику.
            </p>
            <p>
              Сегодня я помогаю клиентам находить опору в карьере и жизни, обучаю
              команды и руководителей, выступаю на конференциях о развитии людей,
              лидерстве и профилактике выгорания.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10">
            {FACTS.map((f) => (
              <div key={f.label} className="bg-card border border-border rounded-2xl p-5 text-center">
                <p className="font-display text-4xl font-700 text-primary">{f.num}</p>
                <p className="text-sm text-muted-foreground mt-1">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl font-500 mb-12">Мои принципы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-card rounded-3xl p-8 border border-border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name={v.icon} size={22} />
                </div>
                <h3 className="font-display text-2xl font-600 mt-6">{v.title}</h3>
                <p className="mt-3 text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
