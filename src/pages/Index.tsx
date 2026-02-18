import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const HERO_IMG = "https://cdn.poehali.dev/projects/61fd604d-84b8-489b-8e67-8f3c848b8518/files/86b28d29-c1f2-406b-8026-f28e5fc2cf6f.jpg";
const MOD_IMG_1 = "https://cdn.poehali.dev/projects/61fd604d-84b8-489b-8e67-8f3c848b8518/files/76048e36-2c8f-4599-952a-24ba26300a56.jpg";
const MOD_IMG_2 = "https://cdn.poehali.dev/projects/61fd604d-84b8-489b-8e67-8f3c848b8518/files/b27090ee-d0dd-43bd-8640-55e4a35560c9.jpg";

const CATEGORIES = ["Все", "Транспорт", "Скины", "Оружие", "Текстуры", "Скрипты"];
const VERSIONS = ["Все версии", "0.3.7", "0.3DL", "RAGE MP"];
const STYLES = ["Все стили", "Реализм", "Дрифт", "RP", "Фан"];

const MODS: { id: number; name: string; category: string; version: string; style: string; price: number; oldPrice?: number; img: string; rating: number; sales: number; hot: boolean }[] = [];

const REVIEWS = [
  { name: "DarkRider", avatar: "🎮", text: "Лучшие моды на транспорт! BMW выглядит как настоящая, установил за 5 минут.", rating: 5 },
  { name: "NightWolf_RP", avatar: "🐺", text: "Покупаю тут скины уже полгода. Качество огонь, поддержка отвечает мгновенно.", rating: 5 },
  { name: "SpeedDemon", avatar: "⚡", text: "Скрипт дрифта — это что-то невероятное. Физика стала реалистичной.", rating: 5 },
  { name: "CityBuilder", avatar: "🏙️", text: "Текстурпаки реально меняют атмосферу игры. Рекомендую всем!", rating: 4 },
];

const INSTALL_STEPS = [
  { icon: "ShoppingCart", title: "Выбери мод", desc: "Найди нужный мод в каталоге и оформи заказ" },
  { icon: "Download", title: "Скачай файлы", desc: "Получи ссылку на скачивание после оплаты" },
  { icon: "FolderOpen", title: "Распакуй", desc: "Извлеки файлы в папку с игрой" },
  { icon: "Gamepad2", title: "Играй!", desc: "Запусти КРМП и наслаждайся модом" },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [activeVersion, setActiveVersion] = useState("Все версии");
  const [activeStyle, setActiveStyle] = useState("Все стили");
  const [mobileMenu, setMobileMenu] = useState(false);

  const filtered = MODS.filter((m) => {
    if (activeCategory !== "Все" && m.category !== activeCategory) return false;
    if (activeVersion !== "Все версии" && m.version !== activeVersion) return false;
    if (activeStyle !== "Все стили" && m.style !== activeStyle) return false;
    return true;
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-oswald text-xl font-bold tracking-wider">
            <span className="text-primary neon-text">МАТИВ</span>
            <span className="text-foreground ml-1">ПРОДАЖИ</span>
          </button>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {[
              { label: "Каталог", id: "catalog" },
              { label: "О модах", id: "about" },
              { label: "Установка", id: "install" },
              { label: "Отзывы", id: "reviews" },
              { label: "Контакты", id: "contacts" },
            ].map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {l.label}
              </button>
            ))}
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileMenu(!mobileMenu)}>
            <Icon name={mobileMenu ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden glass border-t border-border/50 px-4 py-4 flex flex-col gap-3">
            {["catalog", "about", "install", "reviews", "contacts"].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-muted-foreground hover:text-primary transition-colors capitalize">
                {id === "catalog" ? "Каталог" : id === "about" ? "О модах" : id === "install" ? "Установка" : id === "reviews" ? "Отзывы" : "Контакты"}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Hero" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="absolute inset-0 gradient-mesh" />

        <div className="absolute top-1/4 left-10 w-2 h-2 bg-neon-purple rounded-full animate-pulse-glow" />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-neon-cyan rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse-glow" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Новые моды каждую неделю</span>
          </div>

          <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-primary neon-text">МАТИВ</span>
            <br />
            <span className="text-foreground">ПРОДАЖИ</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Премиальные моды для КРМП — транспорт, скины, оружие и скрипты.
            <br className="hidden md:block" />
            Качество, которое меняет игру.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow font-semibold text-base px-8"
              onClick={() => scrollTo("catalog")}
            >
              <Icon name="Sparkles" size={18} />
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/50 text-foreground hover:bg-muted font-semibold text-base px-8"
              onClick={() => scrollTo("about")}
            >
              Узнать больше
            </Button>
          </div>

          <div className="flex justify-center gap-8 mt-16">
            {[
              { value: "500+", label: "Модов" },
              { value: "10K+", label: "Покупок" },
              { value: "4.9", label: "Рейтинг" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-oswald text-2xl md:text-3xl font-bold text-primary neon-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary neon-text">КАТАЛОГ</span> МОДОВ
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Выбирай из сотен проверенных модов для своего сервера
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === c
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {VERSIONS.map((v) => (
              <button
                key={v}
                onClick={() => setActiveVersion(v)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeVersion === v
                    ? "bg-secondary text-secondary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {v}
              </button>
            ))}
            <span className="text-border mx-2">|</span>
            {STYLES.map((s) => (
              <button
                key={s}
                onClick={() => setActiveStyle(s)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeStyle === s
                    ? "bg-secondary text-secondary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* MODS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((mod, i) => (
            <div
              key={mod.id}
              className="group glass rounded-2xl overflow-hidden card-hover"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={mod.img} alt={mod.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {mod.hot && (
                  <Badge className="absolute top-3 left-3 bg-neon-pink text-white border-0 text-xs">
                    🔥 ХИТ
                  </Badge>
                )}
                <Badge className="absolute top-3 right-3 bg-background/80 text-foreground border-0 text-xs">
                  {mod.version}
                </Badge>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs text-primary border-primary/30">
                    {mod.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs text-muted-foreground border-border/50">
                    {mod.style}
                  </Badge>
                </div>

                <h3 className="font-semibold text-lg text-foreground mb-3">{mod.name}</h3>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-foreground">{mod.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-xs">•</span>
                  <span className="text-xs text-muted-foreground">{mod.sales} продаж</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-oswald text-2xl font-bold text-primary">{mod.price}₽</span>
                    {mod.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">{mod.oldPrice}₽</span>
                    )}
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="ShoppingCart" size={14} />
                    Купить
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <Icon name="SearchX" size={48} className="mx-auto mb-4 opacity-50" />
            <p>Модов по выбранным фильтрам не найдено</p>
          </div>
        )}
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-4 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              ПОЧЕМУ <span className="text-primary neon-text">МАТИВ</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Мы создаём моды, которые ставят новую планку качества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Shield", title: "Проверенное качество", desc: "Каждый мод проходит ручную проверку перед публикацией" },
              { icon: "Zap", title: "Мгновенная доставка", desc: "Скачивай моды сразу после оплаты — без ожидания" },
              { icon: "RefreshCw", title: "Обновления", desc: "Бесплатные обновления совместимости с новыми версиями" },
              { icon: "Headphones", title: "Поддержка 24/7", desc: "Поможем с установкой и ответим на любые вопросы" },
            ].map((f, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center card-hover">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={f.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALL */}
      <section id="install" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary neon-text">УСТАНОВКА</span> ЗА 4 ШАГА
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Всё просто — справится даже новичок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTALL_STEPS.map((step, i) => (
            <div key={i} className="relative">
              <div className="glass rounded-2xl p-6 text-center card-hover relative z-10">
                <div className="font-oswald text-5xl font-bold text-primary/20 mb-2">{String(i + 1).padStart(2, "0")}</div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
              {i < INSTALL_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 z-20">
                  <Icon name="ChevronRight" size={20} className="text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-4 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary neon-text">ОТЗЫВЫ</span> ИГРОКОВ
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Нас выбирают тысячи игроков — вот что они говорят
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {REVIEWS.map((r, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{r.name}</div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <Icon key={j} name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary neon-text">СВЯЗАТЬСЯ</span> С НАМИ
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Есть вопросы? Напиши нам — ответим быстро
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-col gap-4">
              <Input placeholder="Твоё имя" className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground" />
              <Input placeholder="Email или Telegram" className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground" />
              <Textarea placeholder="Сообщение..." rows={4} className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground resize-none" />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow w-full">
                <Icon name="Send" size={16} />
                Отправить
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center">
            {[
              { icon: "MessageCircle", label: "Telegram", value: "@mativ_mods" },
              { icon: "AtSign", label: "Email", value: "support@mativ.ru" },
              { icon: "Users", label: "Discord", value: "discord.gg/mativ" },
              { icon: "Clock", label: "Время ответа", value: "до 30 минут" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name={c.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-medium text-foreground">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-oswald text-lg font-bold tracking-wider">
            <span className="text-primary">МАТИВ</span>
            <span className="text-foreground ml-1">ПРОДАЖИ</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 МАТИВ ПРОДАЖИ. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <button className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Icon name="MessageCircle" size={16} className="text-muted-foreground" />
            </button>
            <button className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Icon name="Youtube" size={16} className="text-muted-foreground" />
            </button>
            <button className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Icon name="Gamepad2" size={16} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;