export function createWaitlist() {
  const entries = [];
  return {
    join(slotId, customerId) {
      entries.push({ slotId, customerId, joinedAt: Date.now() });
    },
    forSlot(slotId) {
      return entries.filter((e) => e.slotId === slotId);
    },
  };
}