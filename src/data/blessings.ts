export const blessings = [
  "Don't worry, success is on your way 🍀. Bappa removes all obstacles from your path.",
  
  "Like the modak melts in your mouth, your problems will melt away 😋. Sweet solutions are coming your way.",
  
  "Wisdom and courage are your true modaks 🐘✨. Let them nourish your soul and guide your decisions.",
  
  "Bappa blesses you with peace, patience, and prosperity 🙏. These three gifts will transform your life.",
  
  "This year will bring you clarity and joy 🌸. Trust in the divine timing of your blessings.",
  
  "Your devotion has reached Bappa's heart 💖. He will shower you with unexpected happiness.",
  
  "Every challenge is Bappa's way of making you stronger 💪. You have the divine strength within you.",
  
  "The light of Ganesha will illuminate your darkest moments ✨. Hope is always around the corner.",
  
  "Your wishes are heard, your prayers are answered 🙏. Divine grace is working in your life right now.",
  
  "Bappa says: 'Fear not, for I am always with you' 🐘. You are protected and loved unconditionally.",
  
  "Like the elephant's memory, Bappa never forgets his devotees 🧠💕. Your good deeds will return as blessings.",
  
  "The remover of obstacles is clearing your path 🛤️. New opportunities are opening up for you.",
  
  "Your heart's sincere prayers have touched the divine realm 🌟. Miracles are manifesting in your life.",
  
  "Bappa whispers: 'This too shall pass, and joy will follow' 🌈. Better days are just ahead.",
  
  "Your faith is your greatest strength 💪. With Bappa's blessings, nothing is impossible.",
  
  "Sweet rewards await those who keep faith 🍯. Your persistence will soon bear fruit.",
  
  "The divine elephant's trunk will lift you from any difficulty 🐘⬆️. Rise above your challenges with grace.",
  
  "Bappa sends you waves of positive energy 🌊✨. Let it wash away all your worries and doubts.",
  
  "Your destiny is written in golden letters 📜✨. Trust the beautiful plan the universe has for you.",
  
  "The lord of beginnings blesses your new ventures 🌱. Success and abundance are yours to claim.",
  
  "Like the lotus blooms in muddy water, beauty will emerge from your struggles 🪷. Stay hopeful.",
  
  "Bappa's love surrounds you like a protective shield 🛡️💕. You are safe, blessed, and deeply cherished.",
  
  "The remover of obstacles has heard your call 📢. Watch as barriers dissolve before your very eyes.",
  
  "Your pure intentions have earned divine favor 👑. Bappa will make the impossible possible for you.",
  
  "Dance with joy, for Bappa dances with you 💃🕺. Celebration and happiness are coming your way."
];

export const getRandomBlessing = (): string => {
  const randomIndex = Math.floor(Math.random() * blessings.length);
  return blessings[randomIndex];
};