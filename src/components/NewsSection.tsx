import Icon from "@/components/ui/icon";

interface NewsItem {
  date: string;
  category: string;
  title: string;
  description: string;
  image?: string;
}

const news: NewsItem[] = [
  {
    date: "15 января 2025",
    category: "Обновление",
    title: "Новая версия интеграции с 1С:ЗУП 3.1",
    description: "Добавлена поддержка актуальной версии 1С:ЗУП с расширенными возможностями синхронизации кадровых данных и документооборота.",
  },
  {
    date: "10 января 2025",
    category: "Вебинар",
    title: "Переход на КЭДО: пошаговая инструкция",
    description: "Бесплатный вебинар для HR-специалистов и руководителей. Расскажем как организовать переход на электронный документооборот без остановки работы.",
  },
  {
    date: "28 декабря 2024",
    category: "Новость",
    title: "Подведение итогов 2024 года",
    description: "Более 500 компаний выбрали наше решение для КЭДО. Средняя экономия времени на кадровом учете составила 67%. Спасибо за доверие!",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">НОВОСТИ</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 mb-4">
            Будьте в курсе событий
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Обновления продукта, полезные материалы и актуальная информация о КЭДО
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="h-48 bg-secondary/30 flex items-center justify-center relative overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <Icon name="Newspaper" size={48} className="text-muted-foreground/30" />
                )}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Icon name="Calendar" size={16} />
                  <span>{item.date}</span>
                </div>

                <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>

                <button className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  <span>Читать далее</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-border rounded-lg font-medium hover:border-primary hover:bg-primary/5 transition-all">
            Все новости
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
