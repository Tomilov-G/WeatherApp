export const doFormatTime = (timezoneOffset) => {
  if (timezoneOffset == null) return;

  const nowUtc = new Date();
  const utcSeconds = Math.floor(nowUtc.getTime() / 1000);

  const cityTimestamp = utcSeconds + timezoneOffset;
  const cityDate = new Date(cityTimestamp * 1000);

  const hours = cityDate.getUTCHours().toString().padStart(2, "0");
  const minutes = cityDate.getUTCMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};
