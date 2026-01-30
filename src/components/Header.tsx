import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-xs font-bold text-primary-foreground">1С</span>
          </div>
          <span className="font-semibold text-lg">Кабинет сотрудника</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <a href="#when-needed" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Кому нужен
          </a>
          <a href="#why-kedo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Зачем КЭДО
          </a>
          <a href="#how-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Как работает
          </a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Возможности
          </a>
          <a href="#mobile-app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Мобильное приложение
          </a>
          <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Скриншоты
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Тарифы
          </a>
          <a href="#video" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Видео
          </a>
          <a href="#conditions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Условия
          </a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://t.me/your_channel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="Send" size={18} />
            Telegram
          </a>
          <a href="tel:+74951234567" className="hidden lg:flex items-center gap-2 text-sm font-medium">
            <Icon name="Phone" size={16} />
            +7 (495) 123-45-67
          </a>
          <button className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            Оставить заявку
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;