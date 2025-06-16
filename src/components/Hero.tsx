const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />

      <div className="container mx-auto px-4 py-20 text-center relative">
        <div className="animate-fade-in">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent font-rubik">
            Выбери свое приключение
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Готов к захватывающим испытаниям? Выбери формат квеста и отправляйся
            в увлекательное путешествие полное загадок и открытий!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <span className="text-purple-600 font-semibold">
                ⭐ Более 1000 игроков
              </span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <span className="text-blue-600 font-semibold">
                🏆 50+ квестов
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
