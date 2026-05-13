export const getWindStrength = (windSpeed) => {
  if (windSpeed == null) return "";

  if (windSpeed <= 0.2) return "штиль";
  if (windSpeed <= 1.5) return "тихий ветерок";
  if (windSpeed <= 3.3) return "лёгкий ветерок";
  if (windSpeed <= 5.4) return "слабый ветер";
  if (windSpeed <= 7.9) return "умеренный ветер";
  if (windSpeed <= 10.7) return "свежий ветер";
  if (windSpeed <= 13.8) return "сильный ветер";
  if (windSpeed <= 17.1) return "крепкий ветер";
};

export const getWindDirection = (deg) => {
  if (deg == null || isNaN(deg)) return "";

  const directions = [
    "северный",
    "северо-восточный",
    "восточный",
    "юго-восточный",
    "южный",
    "юго-западный",
    "западный",
    "северо-западный",
  ];

  const index = Math.round(deg / 45) % 8;
  return directions[index];
};
