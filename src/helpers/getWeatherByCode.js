const weatherByCode = {
  0: { title: "Ясно", url: "/assets/icons/MainIcons/SunnyIcon.svg" },
  1: { title: "Малооблачно", url: "/assets/icons/MainIcons/RainAndSunIcon.svg" },
  2: { title: "Переменная облачность", url: "/assets/icons/MainIcons/RainAndSunIcon.svg" },
  3: { title: "Пасмурно", url: "/assets/icons/MainIcons/CloudyIcon.svg" },
  45: { title: "Туман", url: "/assets/icons/MainIcons/CloudyIcon.svg" },
  48: { title: "Изморозь", url: "/assets/icons/MainIcons/CloudyIcon.svg" },
  51: { title: "Морось", url: "/assets/icons/MainIcons/SmallRainIcon.svg" },
  53: { title: "Морось", url: "/assets/icons/MainIcons/SmallRainIcon.svg" },
  55: { title: "Сильная морось", url: "/assets/icons/MainIcons/RainyIcon.svg" },
  56: { title: "Ледяная морось", url: "/assets/icons/MainIcons/SmallRainIcon.svg" },
  57: { title: "Сильная ледяная морось", url: "/assets/icons/MainIcons/RainyIcon.svg" },
  61: { title: "Небольшой дождь", url: "/assets/icons/MainIcons/SmallRainIcon.svg" },
  63: { title: "Дождь", url: "/assets/icons/MainIcons/RainyIcon.svg" },
  65: { title: "Сильный дождь", url: "/assets/icons/MainIcons/StrongRainIcon.svg" },
  66: { title: "Ледяной дождь", url: "/assets/icons/MainIcons/RainyIcon.svg" },
  67: { title: "Сильный ледяной дождь", url: "/assets/icons/MainIcons/StrongRainIcon.svg" },
  71: { title: "Небольшой снег", url: "/assets/icons/MainIcons/SnowIcon.svg" },
  73: { title: "Снег", url: "/assets/icons/MainIcons/SnowIcon.svg" },
  75: { title: "Сильный снег", url: "/assets/icons/MainIcons/SnowIcon.svg" },
  77: { title: "Снежная крупа", url: "/assets/icons/MainIcons/SnowIcon.svg" },
  80: { title: "Небольшой ливень", url: "/assets/icons/MainIcons/SmallRainIcon.svg" },
  81: { title: "Ливень", url: "/assets/icons/MainIcons/RainyIcon.svg" },
  82: { title: "Сильный ливень", url: "/assets/icons/MainIcons/StrongRainIcon.svg" },
  85: { title: "Снегопад", url: "/assets/icons/MainIcons/SnowIcon.svg" },
  86: { title: "Сильный снегопад", url: "/assets/icons/MainIcons/SnowIcon.svg" },
  95: { title: "Гроза", url: "/assets/icons/MainIcons/StrongRainIcon.svg" },
  96: { title: "Гроза с градом", url: "/assets/icons/MainIcons/StrongRainIcon.svg" },
  99: { title: "Сильная гроза с градом", url: "/assets/icons/MainIcons/StrongRainIcon.svg" },
};

export const getWeatherByCode = (code) => {
  return (
    weatherByCode[code] ?? {
      title: "Нет данных",
      url: "/assets/icons/MainIcons/CloudyIcon.svg",
    }
  );
};
