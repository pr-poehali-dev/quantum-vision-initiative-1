import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Как долго занимает внедрение системы?",
      answer: "Стандартное внедрение занимает от 3 до 7 рабочих дней. Это включает настройку интеграции с вашей конфигурацией 1С, обучение сотрудников и тестирование системы."
    },
    {
      question: "Нужно ли менять текущую конфигурацию 1С?",
      answer: "Нет, система работает с большинством типовых и нетиповых конфигураций 1С:ЗУП, 1С:Зарплата и кадры, 1С:ERP без необходимости их изменения."
    },
    {
      question: "Как обеспечивается юридическая значимость документов?",
      answer: "Мы используем квалифицированную электронную подпись (КЭП) и полностью соответствуем требованиям 122-ФЗ. Все документы имеют юридическую силу."
    },
    {
      question: "Что делать, если у сотрудника нет электронной подписи?",
      answer: "Мы поможем организовать получение электронных подписей для всех сотрудников. Также в системе предусмотрена работа с простой электронной подписью там, где это допустимо."
    },
    {
      question: "Можно ли использовать систему для удаленных сотрудников?",
      answer: "Да, это одно из главных преимуществ. Сотрудники могут подписывать документы с любого устройства и из любой точки мира."
    },
    {
      question: "Какая техподдержка предоставляется?",
      answer: "Мы предоставляем техподдержку по телефону, email и в чате. Время ответа — до 4 часов в рабочее время. Для премиум-тарифов доступна приоритетная поддержка 24/7."
    },
    {
      question: "Безопасны ли мои данные?",
      answer: "Все данные хранятся на защищенных серверах в России с шифрованием. Мы соответствуем требованиям 152-ФЗ о защите персональных данных."
    },
    {
      question: "Можно ли интегрировать систему с другими сервисами?",
      answer: "Да, через API можно интегрировать систему с корпоративным порталом, системами учета рабочего времени и другими HR-системами."
    }
  ];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ВОПРОСЫ</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 leading-tight">
            Частые вопросы
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Ответы на самые популярные вопросы о системе
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
