const DACH_COUNTRIES = new Set(["AT", "CH", "DE", "LI", "LU"]);

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== "/") {
      return fetch(request);
    }

    const country = (
      request as Request & { cf?: { country?: string } }
    ).cf?.country?.toUpperCase();
    const target = country && DACH_COUNTRIES.has(country) ? "/de/" : "/en/";

    return Response.redirect(new URL(target, url), 307);
  },
};
