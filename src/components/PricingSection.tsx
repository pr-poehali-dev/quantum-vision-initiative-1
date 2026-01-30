import Icon from "@/components/ui/icon";
import { useState } from "react";

interface PricingTier {
  employees: string;
  duration: string;
  price: number;
}

const mainTiers: PricingTier[] = [
  { employees: "10 сотрудников", duration: "12 месяцев", price: 3360 },
  { employees: "25 сотрудников", duration: "12 месяцев", price: 8400 },
  { employees: "50 сотрудников", duration: "12 месяцев", price: 16800 },
  { employees: "100 сотрудников", duration: "12 месяцев", price: 33600 },
  { employees: "200 сотрудников", duration: "12 месяцев", price: 62400 },
  { employees: "500 сотрудников", duration: "12 месяцев", price: 144000 },
  { employees: "2000 сотрудников", duration: "12 месяцев", price: 528000 },
  { employees: "5000 сотрудников", duration: "12 месяцев", price: 1260000 },
];

const PricingSection = () => {
  const [showAllTiers, setShowAllTiers] = useState(false);

  const displayedTiers = showAllTiers ? mainTiers : mainTiers.slice(0, 3);

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ЦЕНЫ</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 mb-4">
            Стоимость
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите тариф под размер вашей компании
          </p>
        </div>

        <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8 mb-12 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Icon name="Gift" size={32} className="text-primary" />
            <h3 className="text-2xl font-bold">Попробуйте сервис бесплатно!</h3>
          </div>
          <p className="text-muted-foreground text-lg mb-6">
            Получите полный доступ к 1С:Кабинет сотрудника на 45 дней без ограничений
          </p>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg">
            Оставить заявку
            <Icon name="ArrowRight" size={20} />
          </button>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Основные тарифы</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {displayedTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <span className="text-xs bg-secondary px-3 py-1 rounded-full">{tier.duration}</span>
                </div>
                <h4 className="font-semibold text-xl mb-2">{tier.employees}</h4>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{tier.price.toLocaleString('ru-RU')} ₽</span>
                </div>
                <button className="w-full py-3 border-2 border-border rounded-lg font-medium hover:border-primary hover:bg-primary/5 transition-all">
                  Выбрать тариф
                </button>
              </div>
            ))}
          </div>
        </div>

        {!showAllTiers && (
          <div className="text-center">
            <button
              onClick={() => setShowAllTiers(true)}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-border rounded-lg font-medium hover:border-primary hover:bg-primary/5 transition-all"
            >
              <span>Все тарифы</span>
              <Icon name="ChevronDown" size={20} />
            </button>
          </div>
        )}

        {showAllTiers && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllTiers(false)}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-border rounded-lg font-medium hover:border-primary hover:bg-primary/5 transition-all"
            >
              <span>Свернуть</span>
              <Icon name="ChevronUp" size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
