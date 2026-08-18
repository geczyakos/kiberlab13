export function createCustomerStore() {
  const customers = new Map();
  let nextId = 1;
  return {
    add(profile) {
      const id = nextId++;
      customers.set(id, { id, ...profile });
      return id;
    },
    get(id) {
      return customers.get(id);
    },
  };
}