const GallerySection = () => {
  const images = [
    {
      url: "https://cdn.poehali.dev/projects/0ffccfec-6d1c-460b-afd2-f09f9570aaa9/files/e5014d39-070c-4e6f-8423-365812ddb2f0.jpg",
      caption: "Личный кабинет сотрудника"
    },
    {
      url: "https://cdn.poehali.dev/projects/0ffccfec-6d1c-460b-afd2-f09f9570aaa9/files/054c5330-a12b-4503-9a28-de02410ea4e5.jpg",
      caption: "Просмотр расчетного листка"
    },
    {
      url: "https://cdn.poehali.dev/projects/0ffccfec-6d1c-460b-afd2-f09f9570aaa9/files/ac079ed4-0b1f-4529-9acd-653565aad9b2.jpg",
      caption: "Подача заявления на отпуск"
    },
    {
      url: "https://cdn.poehali.dev/projects/0ffccfec-6d1c-460b-afd2-f09f9570aaa9/files/e4a935c1-b2de-4c28-b94a-ded246108d8f.jpg",
      caption: "Подписание документа электронной подписью"
    },
    {
      url: "https://cdn.poehali.dev/projects/0ffccfec-6d1c-460b-afd2-f09f9570aaa9/files/e5014d39-070c-4e6f-8423-365812ddb2f0.jpg",
      caption: "История подписанных документов"
    },
    {
      url: "https://cdn.poehali.dev/projects/0ffccfec-6d1c-460b-afd2-f09f9570aaa9/files/054c5330-a12b-4503-9a28-de02410ea4e5.jpg",
      caption: "Уведомления о новых документах"
    },
    {
      url: "https://cdn.poehali.dev/projects/0ffccfec-6d1c-460b-afd2-f09f9570aaa9/files/ac079ed4-0b1f-4529-9acd-653565aad9b2.jpg",
      caption: "Настройки профиля и безопасности"
    },
    {
      url: "https://cdn.poehali.dev/projects/0ffccfec-6d1c-460b-afd2-f09f9570aaa9/files/e4a935c1-b2de-4c28-b94a-ded246108d8f.jpg",
      caption: "Мобильное приложение для iOS и Android"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ИНТЕРФЕЙС</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 leading-tight">
            Скриншоты системы
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Посмотрите, как выглядит работа с кабинетом сотрудника
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 border-t border-border">
                <p className="text-sm font-medium text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
