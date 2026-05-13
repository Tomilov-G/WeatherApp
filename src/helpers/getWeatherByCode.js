import { getPublicAssetUrl } from "@/helpers/getPublicAssetUrl";

const weatherByCode = {
  0: { title: "Ясно", url: getPublicAssetUrl("assets/icons/MainIcons/SunnyIcon.svg") },
  1: { title: "Малооблачно", url: getPublicAssetUrl("assets/icons/MainIcons/RainAndSunIcon.svg") },
  2: { title: "Переменная облачность", url: getPublicAssetUrl("assets/icons/MainIcons/RainAndSunIcon.svg") },
  3: { title: "Пасмурно", url: getPublicAssetUrl("assets/icons/MainIcons/CloudyIcon.svg") },
  45: { title: "Туман", url: getPublicAssetUrl("assets/icons/MainIcons/CloudyIcon.svg") },
  48: { title: "Изморозь", url: getPublicAssetUrl("assets/icons/MainIcons/CloudyIcon.svg") },
  51: { title: "Морось", url: getPublicAssetUrl("assets/icons/MainIcons/SmallRainIcon.svg") },
  53: { title: "Морось", url: getPublicAssetUrl("assets/icons/MainIcons/SmallRainIcon.svg") },
  55: { title: "Сильная морось", url: getPublicAssetUrl("assets/icons/MainIcons/RainyIcon.svg") },
  56: { title: "Ледяная морось", url: getPublicAssetUrl("assets/icons/MainIcons/SmallRainIcon.svg") },
  57: { title: "Сильная ледяная морось", url: getPublicAssetUrl("assets/icons/MainIcons/RainyIcon.svg") },
  61: { title: "Небольшой дождь", url: getPublicAssetUrl("assets/icons/MainIcons/SmallRainIcon.svg") },
  63: { title: "Дождь", url: getPublicAssetUrl("assets/icons/MainIcons/RainyIcon.svg") },
  65: { title: "Сильный дождь", url: getPublicAssetUrl("assets/icons/MainIcons/StrongRainIcon.svg") },
  66: { title: "Ледяной дождь", url: getPublicAssetUrl("assets/icons/MainIcons/RainyIcon.svg") },
  67: { title: "Сильный ледяной дождь", url: getPublicAssetUrl("assets/icons/MainIcons/StrongRainIcon.svg") },
  71: { title: "Небольшой снег", url: getPublicAssetUrl("assets/icons/MainIcons/SnowIcon.svg") },
  73: { title: "Снег", url: getPublicAssetUrl("assets/icons/MainIcons/SnowIcon.svg") },
  75: { title: "Сильный снег", url: getPublicAssetUrl("assets/icons/MainIcons/SnowIcon.svg") },
  77: { title: "Снежная крупа", url: getPublicAssetUrl("assets/icons/MainIcons/SnowIcon.svg") },
  80: { title: "Небольшой ливень", url: getPublicAssetUrl("assets/icons/MainIcons/SmallRainIcon.svg") },
  81: { title: "Ливень", url: getPublicAssetUrl("assets/icons/MainIcons/RainyIcon.svg") },
  82: { title: "Сильный ливень", url: getPublicAssetUrl("assets/icons/MainIcons/StrongRainIcon.svg") },
  85: { title: "Снегопад", url: getPublicAssetUrl("assets/icons/MainIcons/SnowIcon.svg") },
  86: { title: "Сильный снегопад", url: getPublicAssetUrl("assets/icons/MainIcons/SnowIcon.svg") },
  95: { title: "Гроза", url: getPublicAssetUrl("assets/icons/MainIcons/StrongRainIcon.svg") },
  96: { title: "Гроза с градом", url: getPublicAssetUrl("assets/icons/MainIcons/StrongRainIcon.svg") },
  99: { title: "Сильная гроза с градом", url: getPublicAssetUrl("assets/icons/MainIcons/StrongRainIcon.svg") },
};

export const getWeatherByCode = (code) => {
  return (
    weatherByCode[code] ?? {
      title: "Нет данных",
      url: getPublicAssetUrl("assets/icons/MainIcons/CloudyIcon.svg"),
    }
  );
};
