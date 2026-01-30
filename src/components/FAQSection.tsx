import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Можно ли работать одновременно с бумажными и электронными документами?",
      answer: "Да, переход на КЭДО может быть поэтапным: часть документов продолжает оформляться на бумаге, а часть переводится в электронный вид. Это позволяет адаптировать процессы и сотрудников без резких изменений."
    },
    {
      question: "Нужна ли каждому сотруднику электронная подпись?",
      answer: "Да, подписи понадобится, но выпустить их очень просто. Для сотрудников, которые будут отправлять и подписывать документы со стороны работодателя понадобиться усиленная квалифицированная электронная подпись (УКЭП), которую можно оформить через сервис «1С:Подпись». Для остальных сотрудников выпускается усиленная неквалифицированная подпись (УНЭП) прямо из личного кабинете без сторонних сервисов и дополнительных трат."
    },
    {
      question: "Как сотрудники получают доступ к сервису?",
      answer: "Через браузер с любого удобного устройства или через мобильное приложение «1С:Кабинет сотрудника»."
    },
    {
      question: "Безопасно ли хранить документы онлайн?",
      answer: "Да. Сервис использует защищенные каналы передачи данных и соответствует требованиям законодательства."
    },
    {
      question: "Подходит ли «1С:Кабинет сотрудника» для небольшой компании?",
      answer: "Сервис используют и малые, и крупные организации. Даже при небольшом штате он помогает сократить рутину, ускорить подписание документов и сделать взаимодействие с сотрудниками более прозрачным."
    },
    {
      question: "Нужна ли отдельная программа, чтобы пользоваться сервисом?",
      answer: "«1С:Кабинет сотрудника» работает совместно с программами «1С». Документы формируются в «1С», а сотрудники получают их в личном кабинете через браузер или мобильное приложение."
    },
    {
      question: "У меня нет «1С». Как мне подключить КЭДО?",
      answer: "Вы можете подключить программу «1С:Зарплата и управление персоналом» через интернет (в сервисе «1С:Фреш») и уже в ней настроить «1С:Кабинет сотрудника»."
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