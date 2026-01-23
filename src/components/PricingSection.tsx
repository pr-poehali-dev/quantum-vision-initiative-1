import Icon from "@/components/ui/icon";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "БАЗОВЫЙ",
    price: "990 ₽",
    description: "До 50 сотрудников",
    features: [
      "Все основные функции КЭДО",
      "Интеграция с 1С:ЗУП",
      "Личный кабинет сотрудника",
      "Электронная подпись",
      "Техподдержка в рабочее время",
    ],
  },
  {
    name: "СТАНДАРТ",
    price: "1 990 ₽",
    description: "До 200 сотрудников",
    features: [
      "Все из Базового",
      "Расширенная аналитика",
      "Мобильное приложение",
      "Приоритетная поддержка",
      "Настройка шаблонов",
    ],
    popular: true,
  },
  {
    name: "ПРЕМИУМ",
    price: "По запросу",
    description: "Более 200 сотрудников",
    features: [
      "Все из Стандартного",
      "Персональный менеджер",
      "Поддержка 24/7",
      "SLA на уровне 99.9%",
      "Индивидуальные доработки",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ЦЕНЫ</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 mb-4">
            Прозрачные тарифы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите тариф, который подходит вашей компании. Бесплатный тестовый период 45 дней.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-card border rounded-2xl p-8 relative flex flex-col ${
                tier.popular ? "border-primary shadow-2xl scale-105" : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                  ПОПУЛЯРНЫЙ
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "По запросу" && <span className="text-muted-foreground text-lg">/мес</span>}
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
              </div>

              <div className="space-y-4 flex-1 mb-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-lg text-sm font-semibold transition-all ${
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                    : "border-2 border-border hover:border-primary hover:bg-primary/5"
                }`}
              >
                {tier.price === "По запросу" ? "Связаться" : "Начать"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;