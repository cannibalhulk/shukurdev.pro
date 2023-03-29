import { Feed } from "feed";
import { readAll } from "./read";

const siteUrl = "https://shukurdev.pro"; // Replace with your website's URL

export async function generateRssFeed() {
  const feed = new Feed({
    title: "Shukurdev.pro",
    description: "Shukurdev.pro © 2023. Welcome to my personal website! I mostly write about modern web development, coding and lifestyle",
    id: siteUrl,
    link: siteUrl,
    language: "en",
    favicon: `${siteUrl}/public/favicon/favicon.png`,
    updated: new Date(),
    feedLinks: {
      rss2: `${siteUrl}/rss.xml`,
    },
    author: {
      name: "Shukur Huseynli",
      email: "huseynlisukur000@gmail.com",
      link: siteUrl,
    },
  });

  const posts = await readAll({ directory: "blog",frontmatterSchema: blog });

  for (const post of posts) {
    feed.addItem({
      title: post.frontmatter.title,
      id: `${siteUrl}/blog/${post.slug}`,
      link: `${siteUrl}/blog/${post.slug}`,
      description: post.frontmatter.description,
      content: post.content,
      date: new Date(post.frontmatter.date),
      author: [
        {
          name: "Shukur Huseynli",
          email: "huseynlisukur000@gmail.com",
          link: siteUrl,
        },
      ],
    });
  }

  return feed.rss2();
}