import type { Instrumentation } from "next";

// ponytail: structured server-error logging only; it lands in Vercel runtime logs.
// Swap in @sentry/nextjs once the site has real users and you need alerts + stack grouping.
export const onRequestError: Instrumentation.onRequestError = async (err, request, context) => {
  console.error(
    JSON.stringify({
      level: "error",
      message: err instanceof Error ? err.message : String(err),
      digest: typeof err === "object" && err !== null && "digest" in err ? String(err.digest) : undefined,
      path: request.path,
      method: request.method,
      routeType: context.routeType,
    }),
  );
};
