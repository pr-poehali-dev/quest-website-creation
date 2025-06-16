import QuestCard from "@/components/QuestCard";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Hero />

      <div className="container mx-auto px-4 py-16">
        {/* Quest Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
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

        <Features />
      </div>
    </div>
  );
};

export default Index;
