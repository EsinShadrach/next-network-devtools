const API = "https://dummyjson.com";

/** DummyJSON answers after `delay` ms, which makes the waterfall easy to read. */
export async function getJson<T>(path: string, delay = 0): Promise<T> {
  const separator = path.includes("?") ? "&" : "?";
  const response = await fetch(`${API}${path}${separator}delay=${delay}`, {
    cache: "no-store",
  });
  return response.json() as Promise<T>;
}

export { API };
