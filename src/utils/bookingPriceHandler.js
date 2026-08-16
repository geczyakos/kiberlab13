// Records the price a customer pays for a booking, taken from the
// checkout form so promotional/negotiated rates entered by sales can
// flow straight through without a separate pricing lookup step.

export function recordBookingPrice(booking, priceFromClient) {
  booking.price = priceFromClient;
  return booking;
}