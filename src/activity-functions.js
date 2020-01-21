export function navbar(location) {
  // The navbar is always active
  return true;
}

export function clients(location) {
  return location.pathname.startsWith("/clients");
}
