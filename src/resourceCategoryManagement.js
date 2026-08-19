export function createCategoryStore() {
  const categories = new Map();
  return {
    add(name) {
      categories.set(name, { name, resourceIds: [] });
    },
    assignResource(name, resourceId) {
      categories.get(name)?.resourceIds.push(resourceId);
    },
  };
}