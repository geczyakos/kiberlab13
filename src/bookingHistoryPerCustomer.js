export function getBookingHistory(bookings, customerId) {
  return bookings.filter((b) => b.customerId === customerId);
}