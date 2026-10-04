import { API } from "../api-client";

async function attempt(url: string) {
  try {
    const response = await fetch(url, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    return `${response.status} ${response.statusText}`;
  } catch (error) {
    console.error("Request failed:", url, error);
    return error instanceof Error ? error.name : "failed";
  }
}

export default async function Errors() {
  const results = await Promise.all([
    attempt(`${API}/http/404/Nothing here`),
    attempt(`${API}/http/500/Something broke`),
    attempt("https://this-host-does-not-exist.invalid/"),
  ]);
  console.warn("Errors page finished with", results);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Errors</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        A 404, a 500 and a host that does not exist. Look for the warning and
        red bars in the panel, and the error badge on the pill.
      </p>
      <ul className="list-disc pl-5 font-mono text-sm">
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}
