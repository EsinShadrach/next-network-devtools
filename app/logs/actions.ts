"use server";

import { API } from "../api-client";

/** DummyJSON's test account. The panel hides the password and the tokens it returns. */
export async function signIn() {
  const response = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 30,
    }),
  });
  const user = (await response.json()) as { username: string };
  console.info("Signed in to DummyJSON as", user.username);
}
