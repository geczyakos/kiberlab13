export function isValidDuration(startTime, endTime, minMinutes = 15, maxMinutes = 480) {
  const minutes = (endTime - startTime) / 60000;
  return minutes >= minMinutes && minutes <= maxMinutes;
}