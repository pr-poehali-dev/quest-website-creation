import { useState } from "react";
import { MapPin, Camera, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CityQuest = () => {
  const [selectedQuest, setSelectedQuest] = useState<number | null>(null);

  const quests = [
    {
      id: 1,
      title: "Тайны Старого города",
      difficulty: "Средний",
      duration: "2-3 часа",
      participants: "2-6 человек",
      description:
        "Раскрой секреты исторического центра и найди спрятанное сокровище",
      locations: ["Красная площадь", "Арбат", "Китай-город"],
      price: "Бесплатно",
    },
    {
      id: 2,
      title: "Городские легенды",
      difficulty: "Сложный",
      duration: "3-4 часа",
      participants: "3-8 человек",
      description: "Проследи мистические истории и разгадай городские мифы",
      locations: ["Патриаршие пруды", "Чистые пруды", "Парк Сокольники"],
      price: "500₽ за команду",
    },
    {
      id: 3,
      title: "Квест для новичков",
      difficulty: "Легкий",
      duration: "1-2 часа",
      participants: "1-4 человека",
      description: "Идеальный первый квест для знакомства с форматом",
      locations: ["Парк Горького", "Воробьевы горы"],
      price: "Бесплатно",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            ← Назад к выбору
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-rubik">
            Городские квесты 🏙️
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Исследуй город по-новому! Реальные локации, интересные задания и
            незабываемые впечатления ждут тебя на улицах.
          </p>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Как это работает?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Выбери квест</h3>
              <p className="text-sm text-gray-600">
                Подбери подходящий по сложности и времени
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="text-orange-600" size={20} />
              </div>
              <h3 className="font-semibold mb-2">Иди к точке старта</h3>
              <p className="text-sm text-gray-600">
                Координаты придут в сообщении
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="text-orange-600" size={20} />
              </div>
              <h3 className="font-semibold mb-2">Решай задания</h3>
              <p className="text-sm text-gray-600">
                Фотографируй ответы и получай новые локации
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 text-xl">🏆</span>
              </div>
              <h3 className="font-semibold mb-2">Получи награду</h3>
              <p className="text-sm text-gray-600">
                Сертификат и скидки на следующие квесты
              </p>
            </div>
          </div>
        </div>

        {/* Quest Cards */}
        <div className="grid gap-6">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 cursor-pointer ${
                selectedQuest === quest.id
                  ? "ring-2 ring-orange-500 scale-102"
                  : "hover:shadow-xl"
              }`}
              onClick={() =>
                setSelectedQuest(selectedQuest === quest.id ? null : quest.id)
              }
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {quest.title}
                    </h3>
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
                    <span className="text-2xl font-bold text-orange-600">
                      {quest.price}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{quest.description}</p>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock size={16} />
                      <span className="text-sm">{quest.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Users size={16} />
                      <span className="text-sm">{quest.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin size={16} />
                      <span className="text-sm">
                        {quest.locations.length} локации
                      </span>
                    </div>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Начать квест
                </button>
              </div>

              {selectedQuest === quest.id && (
                <div className="mt-6 pt-6 border-t border-gray-100 animate-fade-in">
                  <h4 className="font-semibold mb-3">Локации маршрута:</h4>
                  <div className="flex flex-wrap gap-2">
                    {quest.locations.map((location, index) => (
                      <span
                        key={index}
                        className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm"
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityQuest;
