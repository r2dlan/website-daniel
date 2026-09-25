import type { ProjectEntry } from "./projects";

export function filterProjects(posts: ProjectEntry[], activeTopic: string) {
  const normalizedTopic = normalizeTopic(activeTopic);

  if (normalizedTopic === "all") return posts;

  return posts.filter((post) =>
    post.data.topics.some((topic) => normalizeTopic(topic) === normalizedTopic),
  );
}

export function projectDateLabel(date: Date, locale: string) {
  return date.toLocaleDateString(locale);
}

export function projectTopics(entry: ProjectEntry) {
  return entry.data.topics;
}

export function normalizeTopic(topic: string) {
  return topic.trim().toLowerCase().replace(/\s+/g, " ");
}
