export function createBookingStore() {
  const bookings = new Map();
  let nextId = 1;
  return {
    create(slotId, customerId) {
      const id = nextId++;
      bookings.set(id, { id, slotId, customerId, status: 'confirmed', createdAt: Date.now() });
      return id;
    },
    cancel(id) {
      const booking = bookings.get(id);
      if (booking) booking.status = 'cancelled';
      return booking;
    },
    list() {
      return Array.from(bookings.values());
    },
    get(id) {
      return bookings.get(id);
    },
  };
}