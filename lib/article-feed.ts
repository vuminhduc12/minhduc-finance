import {
  articleCategories,
  articlePreviews,
  type ArticleCategory,
  type ArticlePreview,
} from "@/lib/articles";
import type { Bi } from "@/lib/copy/types";
import localArticleFeed from "@/public/article-feed.json";

type RemoteArticle = {
  slug?: unknown;
  category?: unknown;
  title?: unknown;
  excerpt?: unknown;
  readTime?: unknown;
  status?: unknown;
  url?: unknown;
  source?: unknown;
  publishedAt?: unknown;
  body?: unknown;
};

type RemoteFeed = {
  updatedAt?: unknown;
  items?: unknown;
};

export type ArticleFeedResult = {
  items: readonly ArticlePreview[];
  source: "local" | "remote";
  updatedAt?: string;
  feedUrl?: string;
};

const categoryById = new Map(articleCategories.map((category) => [category.id, category.label]));

function isBi(value: unknown): value is Bi {
  if (value == null || typeof value !== "object") return false;
  const maybe = value as Record<string, unknown>;
  return typeof maybe.ja === "string" && typeof maybe.vi === "string";
}

function isArticleCategory(value: unknown): value is ArticleCategory {
  return typeof value === "string" && categoryById.has(value as ArticleCategory);
}

function normalizeRemoteArticle(item: RemoteArticle): ArticlePreview | null {
  if (
    typeof item.slug !== "string" ||
    !isArticleCategory(item.category) ||
    !isBi(item.title) ||
    !isBi(item.excerpt)
  ) {
    return null;
  }

  const status = item.status === "published" ? "published" : "planned";

  return {
    slug: item.slug,
    category: item.category,
    categoryLabel: categoryById.get(item.category) ?? articleCategories[0].label,
    title: item.title,
    excerpt: item.excerpt,
    readTime: typeof item.readTime === "string" ? item.readTime : "5 min",
    status,
    url: typeof item.url === "string" && item.url !== "" ? item.url : undefined,
    source: typeof item.source === "string" && item.source !== "" ? item.source : undefined,
    publishedAt:
      typeof item.publishedAt === "string" && item.publishedAt !== ""
        ? item.publishedAt
        : undefined,
    body: Array.isArray(item.body) ? item.body.filter(isBi) : undefined,
  };
}

function parseRemoteFeed(
  feed: RemoteFeed,
  source: ArticleFeedResult["source"],
  feedUrl?: string,
): ArticleFeedResult | null {
  if (!Array.isArray(feed.items)) return null;

  const items = feed.items
    .map((item) => normalizeRemoteArticle(item as RemoteArticle))
    .filter((item): item is ArticlePreview => item != null);

  if (items.length === 0) return null;

  return {
    items,
    source,
    updatedAt: typeof feed.updatedAt === "string" ? feed.updatedAt : undefined,
    feedUrl,
  };
}

export async function getArticleFeed(): Promise<ArticleFeedResult> {
  const feedUrl = process.env.ARTICLE_FEED_URL;

  if (feedUrl == null || feedUrl === "") {
    return parseRemoteFeed(localArticleFeed as RemoteFeed, "local") ?? {
      items: articlePreviews,
      source: "local",
    };
  }

  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 300 },
      headers: { accept: "application/json" },
    });

    if (!response.ok) {
      return { items: articlePreviews, source: "local", feedUrl };
    }

    const feed = (await response.json()) as RemoteFeed;
    return parseRemoteFeed(feed, "remote", feedUrl) ?? { items: articlePreviews, source: "local", feedUrl };
  } catch {
    return { items: articlePreviews, source: "local", feedUrl };
  }
}

export async function getArticleBySlug(slug: string): Promise<ArticlePreview | null> {
  const feed = await getArticleFeed();
  return feed.items.find((article) => article.slug === slug) ?? null;
}
