import Icon from "@/components/ui/icon";

const VideoSection = () => {
  return (
    <section id="video" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ДЕМОНСТРАЦИЯ</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 leading-tight">
            Видео о работе сервиса
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Узнайте больше о возможностях 1С:Кабинет сотрудника
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl border border-border shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110 shadow-xl">
                <Icon name="Play" size={32} className="text-primary-foreground ml-1" />
              </button>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="Clock" size={16} />
                  <span>3:45</span>
                </div>
                <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="Eye" size={16} />
                  <span>1.2K просмотров</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Или запишитесь на персональную демонстрацию с нашим специалистом
            </p>
            <button className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary/50 transition-colors">
              <Icon name="Calendar" size={20} />
              Записаться на демо
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;