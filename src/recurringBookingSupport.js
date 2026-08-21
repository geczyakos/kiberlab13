export function generateRecurringDates(startDate, occurrences, intervalDays = 7) {
  const dates = [];
  for (let i = 0; i < occurrences; i++) {
    dates.push(new Date(startDate.getTime() + i * intervalDays * 86400000));
  }
  return dates;
}