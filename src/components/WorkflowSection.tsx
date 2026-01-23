import Icon from "@/components/ui/icon";

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const steps: WorkflowStep[] = [
  {
    number: "01",
    title: "Создание документа",
    description: "HR создает документ в 1С и отправляет сотруднику на подписание",
    icon: "FileText",
  },
  {
    number: "02",
    title: "Уведомление",
    description: "Сотрудник получает уведомление и переходит в личный кабинет",
    icon: "Bell",
  },
  {
    number: "03",
    title: "Подписание",
    description: "Ознакомление с документом и подпись с любого устройства",
    icon: "PenTool",
  },
  {
    number: "04",
    title: "Хранение",
    description: "Документ автоматически сохраняется в 1С с юридической значимостью",
    icon: "Archive",
  },
];

const WorkflowSection = () => {
  return (
    <section id="how-works" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ПРОЦЕСС</span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 leading-tight">
            Как работает сервис
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Простой и прозрачный процесс электронного документооборота
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={step.icon} size={32} className="text-primary" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">{step.number}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;