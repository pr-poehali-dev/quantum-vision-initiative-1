import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">1С</span>
              </div>
              <span className="font-semibold text-lg">Кабинет сотрудника</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Современное решение для КЭДО в 1С
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="MapPin" size={16} />
              <span>Москва, Россия</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#when-needed" className="text-sm text-muted-foreground hover:text-primary transition-colors">Когда нужен</a></li>
              <li><a href="#advantages" className="text-sm text-muted-foreground hover:text-primary transition-colors">Преимущества</a></li>
              <li><a href="#how-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">Как работает</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Цены</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Документы</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Оферта</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Условия использования</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">152-ФЗ о защите данных</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Phone" size={16} />
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@1c-cabinet.ru" className="hover:text-primary transition-colors">info@1c-cabinet.ru</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>Пн-Пт 9:00-18:00 (МСК)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© 2025 1С Кабинет сотрудника</p>
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">Партнер</span>
              <img src="/placeholder-logo.svg" alt="Партнер" className="h-6 opacity-60" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;