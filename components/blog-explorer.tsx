"use client";

import ArticleImage from "@/components/article-image";
import type { BlogPost } from "@/lib/posts";
import Link from "next/link";
import { useMemo, useState } from "react";

type BlogExplorerProps = {
  posts: BlogPost[];
};

export default function BlogExplorer({ posts }: BlogExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) => {
        const matchesCategory = category === "All" || post.category === category;
        const searchableText = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
        const matchesSearch = searchableText.includes(query.toLowerCase());

        return matchesCategory && matchesSearch;
      }),
    [posts, query, category],
  );

  function clearFilters() {
    setQuery("");
    setCategory("All");
  }

  return (
    <section className="blog-explorer">
      <div className="blog-controls">
        <label className="blog-search">
          <span aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles…"
            aria-label="Search articles"
          />
        </label>

        <div className="category-tabs" aria-label="Filter by category">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={category === item ? "category-tab selected" : "category-tab"}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="results-count">
        {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} to explore
      </p>

      {filteredPosts.length > 0 ? (
        <div className="article-grid blog-grid">
          {filteredPosts.map((post, index) => (
            <Link
              href={`/blog/${post.slug}`}
              className={`article-card ${index === 0 ? "featured-article" : ""}`}
              key={post.slug}
            >
              <div className={`article-art ${post.theme}`}>
                <ArticleImage src={post.image} alt={post.imageAlt} />
                <small>{post.category}</small>
              </div>

              <div className="article-content">
                <div className="article-meta">
                  {post.readTime} read <span>·</span> {post.date}
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="read-link">
                  Read article <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <span aria-hidden="true">⌕</span>
          <h2>No articles found</h2>
          <p>Try another search or choose a different category.</p>
          <button className="button button-primary" type="button" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
