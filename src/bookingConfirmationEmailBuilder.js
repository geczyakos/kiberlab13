export function buildConfirmationEmail(booking, slot) {
  return {
    subject: `Booking #${booking.id} confirmed`,
    body: `Your booking is confirmed for ${new Date(slot.startTime).toLocaleString()}.`,
  };
}