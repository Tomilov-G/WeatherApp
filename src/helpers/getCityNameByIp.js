import axios from "axios";

export const getCityNameByIp = async () => {
  try {
    const { data } = await axios.get("https://ipapi.co/json/");

    if (!data?.city || data?.latitude == null || data?.longitude == null) {
      return null;
    }

    return {
      city: data.city,
      lat: data.latitude,
      lon: data.longitude,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
};
