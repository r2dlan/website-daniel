import type { MiddlewareHandler } from "astro";
import { getCanonicalPath } from "./lib/routing";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = getCanonicalPath(url.pathname);

  if (
    pathname === "/de" ||
    pathname === "/en" ||
    pathname === "/de/projekte" ||
    pathname === "/en/projects"
  ) {
    return context.redirect(`${pathname}/`, 307);
  }

  if (!pathname.endsWith("/") && pathname !== "/") {
    return context.redirect(`${pathname}/`, 301);
  }

  return next();
};
