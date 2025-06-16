import QuestCard from "@/components/QuestCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent font-rubik">
            Выбери свое приключение
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Готов к захватывающим испытаниям? Выбери формат квеста и отправляйся
            в увлекательное путешествие!
          </p>
        </div>

        {/* Quest Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <QuestCard
            title="Городской квест"
            description="Исследуй реальные локации, решай головоломки на улицах города и открывай тайны, спрятанные в архитектуре и истории места."
            icon="🏙️"
            gradient="bg-gradient-to-br from-orange-500 via-orange-600 to-red-500"
            iconBg="bg-white/20 backdrop-blur-sm"
            to="/city-quest"
          />

          <QuestCard
            title="Онлайн-квест"
            description="Погрузись в виртуальные головоломки, разгадывай цифровые загадки и проходи интерактивные испытания не выходя из дома."
            icon="💻"
            gradient="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700"
            iconBg="bg-white/20 backdrop-blur-sm"
            to="/online-quest"
          />
        </div>

        {/* Features */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-6">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                Быстрый старт
              </h3>
              <p className="text-gray-600">
                Начни игру прямо сейчас без регистрации
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                Увлекательно
              </h3>
              <p className="text-gray-600">
                Интересные задания для любого уровня
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                Достижения
              </h3>
              <p className="text-gray-600">Получай награды за прохождение</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
