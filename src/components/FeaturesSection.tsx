import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  return (
    <section id="advantages" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ПРЕИМУЩЕСТВА</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 leading-tight">
            Почему выбирают 1С Кабинет сотрудника
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Современное решение для эффективного управления кадровым документооборотом
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Clock" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Экономия времени</h3>
            <p className="text-muted-foreground">
              Сократите время на обработку кадровых документов в 3 раза благодаря автоматизации
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Shield" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Законность</h3>
            <p className="text-muted-foreground">
              Полное соответствие требованиям 122-ФЗ о переходе на электронный документооборот
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Smartphone" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Удобство</h3>
            <p className="text-muted-foreground">
              Сотрудники подписывают документы с любого устройства в любое время
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="FileCheck" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Полный цикл</h3>
            <p className="text-muted-foreground">
              От создания до подписания и хранения — все этапы в одной системе
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Users" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Взаимодействие</h3>
            <p className="text-muted-foreground">
              Эффективная коммуникация между HR, руководителями и сотрудниками
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Link" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Интеграция с 1С</h3>
            <p className="text-muted-foreground">
              Бесшовная работа с 1С:ЗУП, 1С:Зарплата, 1С:ERP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;