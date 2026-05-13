export const doRound = (deg) => {
  if (deg === null || deg === undefined) return null;
  const num = Number(deg);
  if (Number.isNaN(num)) return null;

  return Math.round(num);
};
