import Icon from "@/components/ui/icon";
import { useState } from "react";

const FeaturesSection = () => {
  const [activeCategory, setActiveCategory] = useState("documents");

  const categories = [
    { id: "documents", label: "Документы и заявления", icon: "FileText" },
    { id: "vacation", label: "Отпуска и отсутствия", icon: "Calendar" },
    { id: "certificates", label: "Справки", icon: "FileCheck" },
    { id: "payslips", label: "Расчетные листки", icon: "Receipt" },
    { id: "personal", label: "Личные данные", icon: "User" }
  ];

  const features = {
    documents: [
      "Обмен любыми необходимыми кадровыми документами (кроме акта о несчастном случае, приказа об увольнении, инструктажей)",
      "Отправка произвольного документа в формате pdf (например, поздравления, графика отпусков или любой другой информации)",
      "Отправка документов в личный кабинет сотрудника прямо из программы «1С»",
      "Согласование документов руководителями",
      "Ознакомление сотрудников с документами",
      "Хранение оригиналов кадровых документов непосредственно в базе «1С»",
      "Создание и использование собственных шаблонов документов",
      "Автоматическая загрузка данных из заявлений сотрудников в программу «1С»",
      "Распределение обработки заявлений между ответственными сотрудниками",
      "Просмотр статусов документов, отправленных на согласование и подписания"
    ],
    vacation: [
      "Калькулятор остатка отпуска",
      "Подача заявления на отпуск в электронном виде",
      "Подача уведомления об отсутствии",
      "Согласование отпусков и отсутствий руководителем",
      "Формирование графика отпусков",
      "Уведомление коллег о планируемом отсутствии",
      "Просмотр графика отсутствии других сотрудников",
      "Фиксация начала и конца рабочего дня сотрудника"
    ],
    certificates: [
      "Запрос различных видов справок через личный кабинет",
      "Получение юридически значимых справок в электронном виде"
    ],
    payslips: [
      "Автоматическая выдача расчетных листков в электронном виде",
      "Просмотр, скачивание и подписание расчетных листков онлайн"
    ],
    personal: [
      "Заявка сотрудников на изменение личных данных",
      "Доступ руководителей к личным данным сотрудников",
      "Просмотр структуры компании и карточек коллег"
    ]
  };

  return (
    <section id="features" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ФУНКЦИОНАЛ</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 mb-4">
            Возможности 1С:Кабинет сотрудника
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Сервис охватывает весь цикл взаимодействий сотрудника и кадровой службы, бухгалтерии
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border hover:border-primary"
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-4">
            {features[activeCategory as keyof typeof features].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={14} className="text-primary" />
                </div>
                <p className="text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
