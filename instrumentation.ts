export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { registerDevtools } = await import("next-server-devtools/server");
    registerDevtools();
  }
}
