"use client";

const buttons: { label: string; run: () => void }[] = [
  {
    label: "console.log",
    run: () => console.log("Clicked at", new Date().toLocaleTimeString(), { page: "logs" }),
  },
  { label: "console.warn", run: () => console.warn("This is a browser warning") },
  { label: "console.error", run: () => console.error(new Error("This is a browser error")) },
  {
    label: "Throw",
    run: () => {
      setTimeout(() => {
        throw new Error("Nobody caught this");
      });
    },
  },
];

export function LogButtons() {
  return (
    <div className="flex flex-wrap gap-2">
      {buttons.map(({ label, run }) => (
        <button
          key={label}
          type="button"
          onClick={run}
          className="rounded-md border border-zinc-300 px-3 py-1.5 font-mono text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
