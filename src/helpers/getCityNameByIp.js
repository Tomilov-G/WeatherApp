import axios from "axios";

export const getCityNameByIp = async () => {
  try {
    const { data } = await axios.get("http://ip-api.com/json/?lang=ru");

    return {
      city: data.city,
      lat: data.lat,
      lon: data.lon,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
};
