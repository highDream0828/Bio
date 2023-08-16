import { writeFileSync } from "fs";
import MDXContent from "./MDXContent";
import RSS from "rss";

export default async function getRSS() {
  const siteURL = "https://Bio";
  const allBlogs = new MDXContent("posts").getAllPosts();

  const feed = new RSS({
    title: "Alex Ritt",
    description: `I've been writing online since 2021, mostly about web development
            and tech careers. In total, I've written ${allBlogs.length} articles
            till now.`,
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Alex Ritt`,
  });

  allBlogs?.map((post) => {
    feed.item({
      title: post?.title,
      url: `${siteURL}/blogs/${post?.slug}`,
      date: post?.date,
      description: post?.excerpt,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
