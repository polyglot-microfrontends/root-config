export function navbar(location) {
  // The navbar is always active
  return true;
}

export function clients(location) {
  return location.pathname.startsWith("/clients");
}

export function accountSettings(location) {
  return location.pathname.startsWith("/settings");
}
