// Logs the user out by clearing their session cookie so the browser
// stops sending it on future requests.

export function logout(res) {
  res.clearCookie('session');
  return { loggedOut: true };
}