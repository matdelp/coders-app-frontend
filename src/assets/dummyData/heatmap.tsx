const getRandomCount = () => {
  return Math.floor(Math.random() * 100); // random count between 0 and 99
};

export const heatMapData = Array.from({ length: 365 }, (_, i) => {
  const date = new Date(2025, 0, 1 + i); // Jan 1, 2025 + i days
  const isoDate = date.toISOString().slice(0, 10);
  return { date: isoDate, count: getRandomCount() };
});
