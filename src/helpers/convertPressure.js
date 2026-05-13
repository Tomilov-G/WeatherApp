export const convertPressureToMmHg = (pressure) => {
  if (pressure == null) return null;
  return Math.round(pressure * 0.75);
};

export const getPressureDescription = (mmHg) => {
  if (mmHg == null) return "—";
  if (mmHg < 740) return "пониженное";
  if (mmHg > 770) return "повышенное";
  return "нормальное";
};
