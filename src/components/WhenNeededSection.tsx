import Icon from "@/components/ui/icon";

const WhenNeededSection = () => {
  const cases = [
    {
      icon: "Building2",
      title: "Средний и крупный бизнес",
      description: "Компании со штатом от 50 сотрудников, где важна скорость обработки кадровых документов"
    },
    {
      icon: "Scale",
      title: "Соблюдение законодательства",
      description: "Организации, которым необходимо соответствовать требованиям 122-ФЗ о КЭДО"
    },
    {
      icon: "TrendingUp",
      title: "Растущие компании",
      description: "Бизнес в стадии активного роста с постоянным наймом новых сотрудников"
    },
    {
      icon: "MapPin",
      title: "Распределенные команды",
      description: "Компании с филиалами в разных городах или удаленными сотрудниками"
    }
  ];

  return (
    <section id="when-needed" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ПРИМЕНЕНИЕ</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 leading-tight">
            Когда нужен 1С Кабинет сотрудника
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Решение для компаний, которые ценят время и хотят оптимизировать кадровые процессы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenNeededSection;
