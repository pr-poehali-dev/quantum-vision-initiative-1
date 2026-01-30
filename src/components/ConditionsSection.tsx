import Icon from "@/components/ui/icon";

const ConditionsSection = () => {
  const programs = [
    "1С:Зарплата и управление персоналом, ред. 3",
    "1С:Зарплата и кадры государственного учреждения, ред. 3",
    "1С:ERP Управление предприятием 2",
    "1С:Комплексная автоматизация 2",
    "1С:Бухгалтерия предприятия, ред. 3 (не рекомендуется, т.к. функционал по работе с кадрами ограничен)"
  ];

  const requirements = [
    {
      icon: "Shield",
      text: "Для программ ПРОФ и КОРП версий необходим действующий договор сопровождения"
    },
    {
      icon: "Wifi",
      text: "Для работы сервиса необходим доступ в интернет"
    },
    {
      icon: "Server",
      text: "Есть возможность использовать локальную версию сервиса «1С:Кабинет сотрудника» на сервере клиента"
    },
    {
      icon: "Settings",
      text: "Возможна настройка сервиса под индивидуальные процессы компании"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ТРЕБОВАНИЯ</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 mb-4">
            Условия и ограничения
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon name="Package" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-2xl">Совместимые программы</h3>
            </div>
            <p className="text-muted-foreground mb-6">Сервис доступен в программах:</p>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon name="Wrench" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-2xl">Подключение и настройка</h3>
            </div>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={req.icon} size={20} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground pt-1">{req.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg">
            Подключить сервис
            <Icon name="ArrowRight" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
