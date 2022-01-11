function getTimeRemaining(endTime) {
  const t = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / 1000 / 60) % 60),
    seconds = Math.floor((t / 1000) % 60);

  return {
    total: t,
    days,
    hours,
    minutes,
    seconds,
  };
}

export default getTimeRemaining;
