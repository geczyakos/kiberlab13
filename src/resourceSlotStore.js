export function createSlotStore() {
  const slots = new Map();
  let nextId = 1;
  return {
    addSlot(resourceId, startTime, endTime) {
      const id = nextId++;
      slots.set(id, { id, resourceId, startTime, endTime, booked: false });
      return id;
    },
    getSlot(id) {
      return slots.get(id);
    },
    listForResource(resourceId) {
      return Array.from(slots.values()).filter((s) => s.resourceId === resourceId);
    },
  };
}