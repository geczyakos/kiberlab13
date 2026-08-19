export function scheduleReminder(booking, minutesBefore = 60) {
  return { bookingId: booking.id, remindAt: booking.startTime - minutesBefore * 60000 };
}