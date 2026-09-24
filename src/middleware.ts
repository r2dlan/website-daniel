import type { MiddlewareHandler } from "astro";
import { getCanonicalPath, getPreferredLanguage } from "./lib/routing";

type CloudflareRequest = Request & { cf?: { country?: string } };

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = getCanonicalPath(url.pathname);

  const hasManualLanguageSelection =
    url.searchParams.get("lang") === "de" || url.searchParams.get("lang") === "en";

  if (hasManualLanguageSelection) {
    return next();
  }

  if (pathname === "/") {
    const cfRequest = context.request as CloudflareRequest;
    const lang = getPreferredLanguage(cfRequest.cf?.country);
    return context.redirect(`/${lang}/`, 307);
  }

  if (
    pathname === "/de" ||
    pathname === "/en" ||
    pathname === "/de/projekte" ||
    pathname === "/en/projects"
  ) {
    return context.redirect(`${pathname}/`, 307);
  }

  if (pathname.startsWith("/blog")) {
    return context.redirect(pathname.replace("/blog", "/de/projekte"), 301);
  }

  if (pathname.startsWith("/de/blog")) {
    return context.redirect(pathname.replace("/de/blog", "/de/projekte"), 301);
  }

  if (!pathname.endsWith("/") && pathname !== "/") {
    return context.redirect(`${pathname}/`, 301);
  }

  return next();
};
