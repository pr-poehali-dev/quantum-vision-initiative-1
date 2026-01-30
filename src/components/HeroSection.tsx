import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-balance">
              1С Кабинет сотрудника
            </h1>

            <p className="text-muted-foreground text-xl max-w-lg leading-relaxed">
              Сервис, который помогает компаниям быстро и безопасно перейти на кадровый электронный документооборот (КЭДО) в программах «1С». Сотрудники получают удобный личный кабинет, а кадровая служба — автоматизацию рутинных процессов и снижение нагрузки.
            </p>

            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
              Получить консультацию
              <Icon name="ArrowRight" size={20} />
            </button>

            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-primary mt-1" />
                <div>
                  <p className="font-semibold text-sm">Бесплатная</p>
                  <p className="text-xs text-muted-foreground">демонстрация</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-primary mt-1" />
                <div>
                  <p className="font-semibold text-sm">Бесплатный доступ</p>
                  <p className="text-xs text-muted-foreground">на 45 дней</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-primary mt-1" />
                <div>
                  <p className="font-semibold text-sm">Бесплатная</p>
                  <p className="text-xs text-muted-foreground">настройка КЭДО</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-card rounded-3xl p-8 border border-border shadow-2xl">
              <div className="flex justify-between items-center text-xs text-muted-foreground mb-6">
                <span className="font-mono">КАБИНЕТ_СОТРУДНИКА</span>
                <span className="flex items-center gap-1">
                  <Icon name="Shield" size={12} />
                  ЗАЩИЩЕННОЕ_СОЕДИНЕНИЕ
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="FileText" size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Трудовой договор</p>
                      <p className="text-xs text-muted-foreground">На подписании</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg text-xs font-medium">
                      Подписать
                    </button>
                    <button className="px-4 bg-background border border-border py-2 rounded-lg text-xs">
                      <Icon name="Download" size={14} />
                    </button>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Заявление на отпуск</p>
                      <p className="text-xs text-muted-foreground">Одобрено</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Icon name="Calendar" size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Расчетный листок</p>
                      <p className="text-xs text-muted-foreground">Декабрь 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-24 bg-yellow-50 p-3 rounded-lg shadow-lg rotate-3 border border-yellow-200 max-w-[160px]">
                <p className="text-xs font-semibold text-yellow-900">Все документы</p>
                <p className="text-xs text-yellow-800 mt-1">в одном месте! 🚀</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;