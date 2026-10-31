import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleImage from "@/components/article-image";
import { posts } from "@/lib/posts";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  return {
    title: post?.title ?? "Article not found",
    description: post?.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <main className="article-page wrap">
      <Link className="back-link" href="/blog">
        ← Back to the journal
      </Link>

      <header className="article-header">
        <span className="eyebrow">
          {post.category.toUpperCase()} · {post.readTime.toUpperCase()} READ
        </span>
        <h1>{post.title}</h1>
        <p className="article-deck">{post.excerpt}</p>
        <div className="article-byline">
          <span className="author-avatar">S</span>
          <span>
            <strong>SkyCast Editorial</strong>
            <small>{post.date} · A practical weather guide</small>
          </span>
        </div>
      </header>

      <div className={`article-hero-art ${post.theme}`}>
        <ArticleImage
          src={post.image}
          alt={post.imageAlt}
          className="article-photo article-hero-photo"
          sizes="(max-width: 900px) 100vw, 900px"
        />
        <div className="article-hero-overlay">
          <small>SKYCAST FIELD NOTES</small>
          <strong>{post.category}</strong>
        </div>
      </div>

      <article className="prose">
        {post.content.map((block, index) =>
          block.type === "heading" ? (
            <h2 key={`${block.type}-${index}`}>{block.text}</h2>
          ) : (
            <p key={`${block.type}-${index}`}>{block.text}</p>
          ),
        )}

        <div className="article-callout">
          <span aria-hidden="true">✦</span>
          <div>
            <strong>A little reminder</strong>
            <p>
              Forecasts are useful guides, but conditions can change. Check local updates before
              making safety-critical decisions.
            </p>
          </div>
        </div>
      </article>

      <section className="related">
        <div className="section-head">
          <div>
            <span className="eyebrow">KEEP EXPLORING</span>
            <h2>More from the journal</h2>
          </div>
          <Link href="/blog" className="text-link">
            All articles →
          </Link>
        </div>

        <div className="article-grid">
          {relatedPosts.map((item) => (
            <Link href={`/blog/${item.slug}`} className="article-card" key={item.slug}>
              <div className={`article-art ${item.theme}`}>
                <ArticleImage src={item.image} alt={item.imageAlt} />
                <small>{item.category}</small>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  {item.readTime} read <span>·</span> {item.date}
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <span className="read-link">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
