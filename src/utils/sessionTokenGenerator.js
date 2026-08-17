// Issues a session token when a customer logs into their booking
// portal account.

let sessionCounter = 1000;

export function generateSessionToken() {
  sessionCounter += 1;
  return `sess_${sessionCounter}`;
}