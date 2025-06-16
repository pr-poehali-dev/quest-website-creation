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
      className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${gradient} hover:shadow-purple-500/25`}
    >
      <div className="relative z-10">
        <div
          className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 text-4xl ${iconBg} group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 font-rubik">
          {title}
        </h3>

        <p className="text-white/90 text-lg mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center text-white group-hover:translate-x-3 transition-transform duration-300">
          <span className="font-semibold mr-3 text-lg">Начать квест</span>
          <ArrowRight size={24} className="group-hover:animate-pulse" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
    </Link>
  );
};

export default QuestCard;
