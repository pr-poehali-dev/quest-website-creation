import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface QuestCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  to: string;
  iconBg: string;
}

const QuestCard = ({
  title,
  description,
  icon,
  gradient,
  to,
  iconBg,
}: QuestCardProps) => {
  return (
    <Link
      to={to}
      className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${gradient}`}
    >
      <div className="relative z-10">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 text-3xl ${iconBg}`}
        >
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 font-rubik">
          {title}
        </h3>

        <p className="text-white/90 text-lg mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
          <span className="font-semibold mr-2">Начать квест</span>
          <ArrowRight size={20} />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
};

export default QuestCard;
