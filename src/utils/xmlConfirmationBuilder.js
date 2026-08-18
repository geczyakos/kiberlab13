// Builds the XML payload sent to our partner property-management
// system whenever a booking is confirmed, so their system stays in
// sync with ours.

export function buildConfirmationXml(booking, customer) {
  return `<?xml version="1.0"?>
<booking id="${booking.id}">
  <customerName>${customer.name}</customerName>
  <notes>${booking.notes || ''}</notes>
</booking>`;
}