import Icon from "@/components/ui/icon";

const WhenNeededSection = () => {
  const cases = [
    {
      icon: "Users",
      title: "Много сотрудников и документов",
      description: "Большой объем кадровых документов требует автоматизации процессов"
    },
    {
      icon: "MessageSquare",
      title: "Много обращений в кадры",
      description: "Большое количество личных обращений в бухгалтерию и кадровую службу"
    },
    {
      icon: "Home",
      title: "Удаленная работа",
      description: "Есть специалисты, работающие удаленно или в вахтовом формате"
    },
    {
      icon: "MapPin",
      title: "Распределенные офисы",
      description: "Нет единого офиса или филиалы распределены по разным регионам"
    },
    {
      icon: "Plane",
      title: "Частые командировки",
      description: "Сотрудники часто находятся в командировках"
    },
    {
      icon: "TrendingUp",
      title: "Повышение прозрачности",
      description: "Есть потребность повысить прозрачность и скорость кадровых процессов"
    }
  ];

  return (
    <section id="when-needed" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ПРИМЕНЕНИЕ</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 leading-tight">
            Кому нужен 1С:Кабинет сотрудника
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Сервис будет полезен компаниям, у которых:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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