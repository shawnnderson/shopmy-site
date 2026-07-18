export const AUTH_COOKIE = "site_auth";

async function sha256(input: string) {
  const data = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function getExpectedAuthToken() {
  return sha256(process.env.SITE_PASSWORD ?? "");
}

export async function checkPassword(password: string) {
  return password === process.env.SITE_PASSWORD && password.length > 0;
}
