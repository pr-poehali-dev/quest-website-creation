const Features = () => {
  const features = [
    {
      icon: "⏱️",
      title: "Быстрый старт",
      description: "Начни игру прямо сейчас без регистрации",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: "🎯",
      title: "Увлекательно",
      description: "Интересные задания для любого уровня",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: "🏆",
      title: "Достижения",
      description: "Получай награды за прохождение",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">
        Почему выбирают наши квесты?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
