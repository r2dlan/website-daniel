import { getCollection, type CollectionEntry } from "astro:content";

export type ProjectEntry = CollectionEntry<"projects">;

export type ProjectListEntry = ProjectEntry & { slug: string };

export async function getProjects(language: "de" | "en") {
  const entries = await getCollection("projects", (entry) => entry.data.language === language);

  return entries
    .map((entry) => ({
      ...entry,
      slug: entry.id.split("/").pop()?.replace(/\.md$/, "") ?? entry.slug,
    }))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime()) as ProjectListEntry[];
}

export async function getProjectTopics(language: "de" | "en") {
  const entries = await getProjects(language);
  return [...new Set(entries.flatMap((entry) => entry.data.topics))].sort((a, b) => a.localeCompare(b));
}

export function matchesTopic(entry: ProjectEntry, topic: string) {
  return entry.data.topics.includes(topic);
}

export async function getProjectTranslations(language: "de" | "en") {
  const entries = await getProjects(language);
  const translations = new Map<string, ProjectEntry>();

  for (const entry of entries) {
    if (entry.data.translationKey) {
      translations.set(entry.data.translationKey, entry);
    }
  }

  return translations;
}
