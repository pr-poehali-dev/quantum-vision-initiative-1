import Icon from "@/components/ui/icon";

const MobileAppSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">МОБИЛЬНОСТЬ</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 mb-4">
            Мобильное приложение 1С:Кабинет сотрудника
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Приложение для работы с личным кабинетом доступно для скачивания на iOS и Android
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Bell" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Уведомления</h3>
                  <p className="text-muted-foreground">
                    Мгновенные push-уведомления о новых документах и задачах
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="FileSignature" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Подписание</h3>
                  <p className="text-muted-foreground">
                    Подписывайте документы электронной подписью прямо с телефона
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Calendar" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Отпуска</h3>
                  <p className="text-muted-foreground">
                    Подавайте заявления на отпуск и отслеживайте их статус
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Receipt" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Расчетные листки</h3>
                  <p className="text-muted-foreground">
                    Просматривайте и скачивайте расчетные листки в любое время
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageSquare" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Справки</h3>
                  <p className="text-muted-foreground">
                    Запрашивайте справки 2-НДФЛ и другие документы онлайн
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-sm mx-auto">
              <div className="bg-card border-8 border-foreground/10 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-secondary/30 rounded-[2rem] overflow-hidden">
                  <div className="bg-background/50 p-4 border-b border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Icon name="User" size={16} className="text-primary-foreground" />
                        </div>
                        <span className="font-semibold text-sm">Иван Петров</span>
                      </div>
                      <Icon name="Menu" size={20} className="text-muted-foreground" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-card p-2 rounded-lg text-center">
                        <div className="font-bold text-primary">3</div>
                        <div className="text-muted-foreground">Новых</div>
                      </div>
                      <div className="bg-card p-2 rounded-lg text-center">
                        <div className="font-bold">12</div>
                        <div className="text-muted-foreground">Подписано</div>
                      </div>
                      <div className="bg-card p-2 rounded-lg text-center">
                        <div className="font-bold">28</div>
                        <div className="text-muted-foreground">Дней</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="bg-card rounded-xl p-3 border-l-4 border-primary">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm">Приказ об отпуске</span>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Новый</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Требует подписания</p>
                    </div>

                    <div className="bg-card rounded-xl p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm">Расчетный листок</span>
                        <span className="text-xs text-muted-foreground">Январь 2025</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Готов к просмотру</p>
                    </div>

                    <div className="bg-card rounded-xl p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm">Справка 2-НДФЛ</span>
                        <Icon name="CheckCircle" size={16} className="text-green-600" />
                      </div>
                      <p className="text-xs text-muted-foreground">Готова к скачиванию</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-12 bg-primary text-primary-foreground p-3 rounded-xl shadow-lg rotate-6 max-w-[140px]">
                <p className="text-xs font-semibold">Все под рукой!</p>
              </div>

              <div className="absolute -left-4 bottom-24 bg-card border border-border p-3 rounded-xl shadow-lg -rotate-6 max-w-[140px]">
                <p className="text-xs font-semibold">Работает офлайн</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-xl font-semibold hover:bg-foreground/90 transition-colors shadow-lg">
            <Icon name="Apple" size={24} />
            <div className="text-left">
              <div className="text-xs opacity-80">Загрузите в</div>
              <div className="text-base">App Store</div>
            </div>
          </button>
          <button className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-xl font-semibold hover:bg-foreground/90 transition-colors shadow-lg">
            <Icon name="Play" size={24} />
            <div className="text-left">
              <div className="text-xs opacity-80">Доступно в</div>
              <div className="text-base">Google Play</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
