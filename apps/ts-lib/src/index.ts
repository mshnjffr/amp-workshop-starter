// Minimal TS library entry for workshop
// Note: `getUserInfo` is deprecated; use `getUserProfile` instead.

/**
 * @deprecated Use `getUserProfile` instead which returns `{ id, fullName }`.
 */
export function getUserInfo(id: string): { id: string; name: string } {
  return { id, name: formatName(id) };
}

export function getUserProfile(id: string): { id: string; fullName: string } {
  return { id, fullName: formatName(id) };
}

// Small util kept here intentionally so we can refactor into a separate file later.
export function formatName(id: string): string {
  return `User ${id}`;
}
