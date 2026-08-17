export function isSlotAvailable(slotStore, slotId) {
  const slot = slotStore.getSlot(slotId);
  return slot !== undefined && !slot.booked;
}