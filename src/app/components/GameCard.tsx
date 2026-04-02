import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router';

interface GameCardProps {
  title: string;
  image?: string;
  imageUrl?: string;
  genre: string;
  players: string;
  featured?: boolean;
}

export function GameCard({ title, image, imageUrl, genre, players, featured }: GameCardProps) {
  const imgSrc = image || imageUrl;
  const { border, text, textOpacity, bgHover, primary } = useTheme();
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`relative overflow-hidden rounded-lg ${bgHover} backdrop-blur-sm border ${border} hover:border-opacity-80 transition-all cursor-pointer`}
      onClick={() => navigate('/coming-soon')}
    >
      <div className="absolute inset-0">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="relative p-4 h-full flex flex-col justify-end min-h-[200px]">
        <div className="space-y-2">
          <span className={`text-xs px-2 py-1 ${bgHover} border ${border} rounded ${textOpacity} inline-block`}>
            {genre}
          </span>
          <h3 className={`text-base ${text}`}>{title}</h3>
          <div className={`flex items-center gap-2 text-xs ${textOpacity}`}>
            <Users className="w-3 h-3" />
            <span>{players}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}