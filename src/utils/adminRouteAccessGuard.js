// Restricts internal admin routes (e.g. /admin/reports,
// /admin/refunds) to staff accounts.

export function isAdminRoute(path) {
  return path.startsWith('/admin');
}

export function requireAdminRole(path, user) {
  if (!isAdminRoute(path)) return true;
  return user && user.role === 'admin';
}