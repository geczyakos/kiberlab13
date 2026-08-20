export function createStatusHistory() {
  const history = [];
  return {
    record(bookingId, status) {
      history.push({ bookingId, status, at: Date.now() });
    },
    forBooking(bookingId) {
      return history.filter((h) => h.bookingId === bookingId);
    },
  };
}