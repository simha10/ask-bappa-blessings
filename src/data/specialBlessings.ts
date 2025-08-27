export const specialBlessings = [
  "🎉 DIVINE VICTORY! 🎉 Bappa is extremely pleased with your skill! You have shown the determination of a true devotee. May your life be filled with endless modaks of joy and success! 🍬✨",
  
  "🐘 SACRED TRIUMPH! 🐘 Your quick reflexes have earned Ganesha's highest blessing! Like you caught every modak, may you catch every opportunity that comes your way! 🌟🙏",
  
  "✨ CELESTIAL CHAMPION! ✨ Bappa dances with joy at your victory! Your dedication mirrors that of his most devoted followers. Prosperity and wisdom shall be your eternal companions! 🕺💎",
  
  "🌺 DIVINE PERFECTION! 🌺 You have proven yourself worthy of the highest blessings! May your path be as sweet as the modaks you caught, and may obstacles dissolve like sugar in milk! 🥛🍯",
  
  "🎊 SUPREME BLESSING! 🎊 Ganesha himself applauds your achievement! Your focus and determination have opened the gates of divine grace. Expect miracles in your daily life! 🚪✨",
  
  "🏆 MODAK MASTER! 🏆 You have mastered the art of divine catching! As you collected every sweet blessing, may the universe collect every prayer of yours and fulfill them beyond your dreams! 🌈🙏",
  
  "💫 ULTIMATE DEVOTION! 💫 Your perfect performance has touched Bappa's heart! Like the steady rhythm of your catches, may your life flow with constant happiness and abundance! 🎵💰",
  
  "🎪 LEGENDARY ACCOMPLISHMENT! 🎪 You are now among the blessed champions of Ganesha! Your life shall be a festival of continuous celebrations and sweet victories! 🎭🍬"
];

export const getRandomSpecialBlessing = (): string => {
  const randomIndex = Math.floor(Math.random() * specialBlessings.length);
  return specialBlessings[randomIndex];
};