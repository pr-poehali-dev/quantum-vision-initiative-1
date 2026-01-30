import Icon from "@/components/ui/icon";

const WhyKEDOSection = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Ускорение процессов",
      description: "Подача заявлений, согласование и подписание документов проходят онлайн, без визитов в отдел кадров"
    },
    {
      icon: "ShieldCheck",
      title: "Снижение риска ошибок",
      description: "Документы автоматически попадают в «1С», исключая ошибки ручного ввода"
    },
    {
      icon: "Scale",
      title: "Соблюдение законодательства",
      description: "Электронные документы подписываются усиленной квалифицированной или неквалифицированной электронной подписью, что соответствует требованиям законодательства РФ"
    },
    {
      icon: "Smartphone",
      title: "Удобство для сотрудников",
      description: "Все документы доступны в мобильном приложении или браузере"
    },
    {
      icon: "PiggyBank",
      title: "Экономия ресурсов",
      description: "Меньше затрат на бумагу, печать, хранение и пересылку"
    },
    {
      icon: "MapPinned",
      title: "Удаленное подписание",
      description: "Сотрудники, которые работают из дома либо вахтовым методом, могут не приезжать в офис для решения кадровых вопросов"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ПРЕИМУЩЕСТВА</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 mb-4">
            Зачем переходить на КЭДО
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name={benefit.icon} size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKEDOSection;
