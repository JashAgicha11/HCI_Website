export type StaticUser = {
  fullName: string;
  email: string;
  memberSince: string;
};

const USER_KEY = "hci_static_user";

export function saveStaticUser(user: StaticUser) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getStaticUser(): StaticUser | null {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StaticUser;
  } catch {
    return null;
  }
}

export function clearStaticUser() {
  localStorage.removeItem(USER_KEY);
}
