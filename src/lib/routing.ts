const DACH_COUNTRIES = new Set(["AT", "CH", "DE", "LI", "LU"]);

export function getPreferredLanguage(country?: string | null) {
  const normalized = country?.toUpperCase();

  return normalized && DACH_COUNTRIES.has(normalized) ? "de" : "en";
}

export function getCanonicalPath(pathname: string) {
  if (pathname === "/" || pathname.endsWith("/")) return pathname;

  if (
    pathname === "/de" ||
    pathname === "/en" ||
    pathname === "/de/projekte" ||
    pathname === "/en/projects"
  ) {
    return `${pathname}/`;
  }

  return pathname;
}
