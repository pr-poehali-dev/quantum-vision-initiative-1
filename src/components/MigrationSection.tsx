import Icon from "@/components/ui/icon";

const MigrationSection = () => {
  return (
    <section id="migration" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ВНЕДРЕНИЕ</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 leading-tight">
            Переход на КЭДО
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Мы поможем вам безболезненно перейти на электронный документооборот
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Headphones" size={40} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Консультация</h3>
            <p className="text-muted-foreground">
              Бесплатная консультация специалиста по вашей ситуации и требованиям
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Settings" size={40} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Настройка</h3>
            <p className="text-muted-foreground">
              Бесплатная настройка системы под вашу конфигурацию 1С
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="GraduationCap" size={40} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Обучение</h3>
            <p className="text-muted-foreground">
              Обучение HR-специалистов и сотрудников работе с системой
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-bold text-2xl md:text-3xl mb-4">
              Получите бесплатный доступ на 45 дней
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Попробуйте все возможности системы без ограничений. Без привязки карты.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
              Начать тестовый период
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationSection;
