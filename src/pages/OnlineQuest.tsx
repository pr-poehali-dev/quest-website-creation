import { useState } from "react";
import { Monitor, Brain, Trophy, Play } from "lucide-react";
import { Link } from "react-router-dom";

const OnlineQuest = () => {
  const [activeQuest, setActiveQuest] = useState<number | null>(null);

  const quests = [
    {
      id: 1,
      title: "Цифровой детектив",
      category: "Логика",
      difficulty: "Средний",
      duration: "45-60 мин",
      description:
        "Раскрой киберпреступление, анализируя данные и следуя цифровым уликам",
      tasks: 12,
      reward: "Сертификат детектива",
      preview: "🕵️‍♂️",
    },
    {
      id: 2,
      title: "Загадки программиста",
      category: "IT",
      difficulty: "Сложный",
      duration: "60-90 мин",
      description:
        "Решай алгоритмические задачи и программируй виртуальные устройства",
      tasks: 15,
      reward: "Диплом кодера",
      preview: "💻",
    },
    {
      id: 3,
      title: "Тайны интернета",
      category: "Поиск",
      difficulty: "Легкий",
      duration: "30-45 мин",
      description:
        "Научись находить скрытую информацию в сети и разгадывать веб-загадки",
      tasks: 8,
      reward: "Значок исследователя",
      preview: "🌐",
    },
    {
      id: 4,
      title: "Математические головоломки",
      category: "Математика",
      difficulty: "Средний",
      duration: "40-50 мин",
      description:
        "Интерактивные математические задачи от простых до умопомрачительных",
      tasks: 10,
      reward: "Медаль математика",
      preview: "🧮",
    },
  ];

  const startQuest = (questId: number) => {
    alert(
      `Квест #${questId} запускается! (В реальной версии здесь будет игровой интерфейс)`,
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            ← Назад к выбору
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-rubik">
            Онлайн-квесты 💻
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Виртуальные приключения без границ! Решай головоломки, программируй,
            исследуй цифровой мир прямо в браузере.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">47</div>
            <div className="text-sm text-gray-600">Заданий</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">4</div>
            <div className="text-sm text-gray-600">Категории</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">∞</div>
            <div className="text-sm text-gray-600">Попыток</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Доступны</div>
          </div>
        </div>

        {/* Quest Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{quest.preview}</div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      quest.difficulty === "Легкий"
                        ? "bg-green-100 text-green-700"
                        : quest.difficulty === "Средний"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {quest.difficulty}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {quest.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {quest.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {quest.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <Monitor size={16} />
                  <span className="text-sm">{quest.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Brain size={16} />
                  <span className="text-sm">{quest.tasks} заданий</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 col-span-2">
                  <Trophy size={16} />
                  <span className="text-sm">{quest.reward}</span>
                </div>
              </div>

              <button
                onClick={() => startQuest(quest.id)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Начать квест
              </button>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Почему онлайн-квесты?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Играй везде</h3>
              <p className="text-gray-600">
                Нужен только браузер — никаких загрузок
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Развивай навыки</h3>
              <p className="text-gray-600">
                Логика, программирование, аналитика
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Получай награды</h3>
              <p className="text-gray-600">
                Сертификаты и достижения за прохождение
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineQuest;
