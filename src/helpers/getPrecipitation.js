import { getWeatherByCode } from "@/helpers/getWeatherByCode";

export const getPrecipitation = (obj) => {
  if (!obj) return null;

  if (obj?.weather_code !== undefined) {
    return getWeatherByCode(obj.weather_code);
  }

  const weather = obj?.weather?.[0];

  if (weather?.main === "Thunderstorm") {
    return { title: "Гроза", url: "/assets/icons/MainIcons/StrongRainIcon.svg" };
  }

  if (weather?.main === "Drizzle") {
    return { title: "Морось", url: "/assets/icons/MainIcons/SmallRainIcon.svg" };
  }

  if (weather?.main === "Rain") {
    return { title: "Дождь", url: "/assets/icons/MainIcons/RainyIcon.svg" };
  }

  if (weather?.main === "Snow") {
    return { title: "Снег", url: "/assets/icons/MainIcons/SnowIcon.svg" };
  }

  if (weather?.main === "Clear") {
    return { title: "Ясно", url: "/assets/icons/MainIcons/SunnyIcon.svg" };
  }

  if (weather?.main === "Clouds") {
    return { title: "Облачно", url: "/assets/icons/MainIcons/CloudyIcon.svg" };
  }

  if (weather?.main === "Mist" || weather?.main === "Fog") {
    return { title: "Туман", url: "/assets/icons/MainIcons/CloudyIcon.svg" };
  }

  return { title: "Без осадков", url: "/assets/icons/MainIcons/SunnyIcon.svg" };
};
