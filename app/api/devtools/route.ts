import { createDevtoolsRoute } from "next-server-devtools/server";

// A demo, so no authorize. In a real app, check a session here.
const route = createDevtoolsRoute();

export const GET = route.GET;
export const DELETE = route.DELETE;
