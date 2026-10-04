import { signIn } from "./actions";
import { LogButtons } from "./log-buttons";

export default function Logs() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Logs and redaction</h1>

      <section className="flex flex-col gap-3">
        <h2 className="font-medium">Browser logs</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Each button writes to the browser console. They show up in the
          panel&apos;s Logs tab next to the server&apos;s.
        </p>
        <LogButtons />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-medium">A server action with secrets</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Signs in to DummyJSON&apos;s test account. Open the call in the panel:
          the password in the request and the tokens in the response are
          redacted.
        </p>
        <form action={signIn}>
          <button
            type="submit"
            className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
          >
            Sign in to DummyJSON
          </button>
        </form>
      </section>
    </div>
  );
}
