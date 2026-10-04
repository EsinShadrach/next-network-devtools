import { captureBrowserLogs } from "next-server-devtools/browser";

if (process.env.NODE_ENV === "development") captureBrowserLogs();
