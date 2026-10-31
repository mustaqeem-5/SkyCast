import Link from "next/link";
import ArticleImage from "@/components/article-image";
import WeatherDashboard from "@/components/weather-dashboard";
import { getWeatherByCity } from "@/lib/weather";
import { posts } from "@/lib/posts";

export const revalidate = 300;

export default async function HomePage() {
  const initialWeather = await getWeatherByCity("Karachi").catch(() => null);
  const featured = posts.slice(0, 3);
  return (
    <main>
      <section className="hero wrap">
        <div className="hero-copy">
          <span className="eyebrow"><span className="live-dot" /> YOUR WEATHER, YOUR WORLD</span>
          <h1>Look up.<br /><span>Live informed.</span></h1>
          <p className="hero-text">Thoughtful forecasts, useful weather guides, and stories that help you make the most of every kind of day.</p>
          <div className="hero-actions"><Link className="button button-primary" href="#weather">Check the weather <span>↗</span></Link><Link className="text-link" href="/blog">Explore the journal →</Link></div>
          <div className="hero-proof"><span className="proof-icon">✦</span><span><strong>Forecasts made simple</strong><small>Weather data, explained clearly</small></span></div>
        </div>
        <div className="hero-art" aria-label="Illustration of a sun and clouds">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="sun-glow" /><div className="sun">☀</div><div className="cloud cloud-back">☁</div><div className="cloud cloud-front">☁</div>
          <div className="floating-tag tag-top"><span>↗</span><div><strong>Plan with confidence</strong><small>Make every day count</small></div></div>
          <div className="floating-tag tag-bottom"><span className="mini-sun">☼</span><div><strong>Weather + knowledge</strong><small>All in one place</small></div></div>
        </div>
      </section>

      <section id="weather" className="section wrap">
        <div className="section-head"><div><span className="eyebrow">LIVE CONDITIONS</span><h2>Your city, right now.</h2><p>Search any city to see current conditions and the 5-day forecast.</p></div><span className="section-index">01 / WEATHER</span></div>
        <WeatherDashboard initialWeather={initialWeather} />
      </section>

      <section className="benefit-band"><div className="wrap benefit-grid">
        <div><span className="benefit-number">01</span><h3>Know before you go</h3><p>Get a quick read on temperature, wind, rain and the days ahead.</p></div>
        <div><span className="benefit-number">02</span><h3>Understand the forecast</h3><p>Practical guides make weather terms easier to understand.</p></div>
        <div><span className="benefit-number">03</span><h3>Find your next read</h3><p>Explore seasonal ideas, travel tips and everyday weather stories.</p></div>
      </div></section>

      <section className="section wrap journal-preview">
        <div className="section-head"><div><span className="eyebrow">FROM THE JOURNAL</span><h2>A little more about the sky.</h2><p>Useful reads for curious minds and better-planned days.</p></div><Link className="text-link" href="/blog">View all articles ↗</Link></div>
        <div className="article-grid">{featured.map((post) => <Link href={`/blog/${post.slug}`} className="article-card" key={post.slug}>
          <div className={`article-art ${post.theme}`}><ArticleImage src={post.image} alt={post.imageAlt} /><small>{post.category}</small></div>
          <div className="article-content"><div className="article-meta">{post.readTime} read <span>·</span> {post.date}</div><h3>{post.title}</h3><p>{post.excerpt}</p><span className="read-link">Read article <span>→</span></span></div>
        </Link>)}</div>
      </section>

      <section className="newsletter-wrap wrap"><div className="newsletter"><div><span className="eyebrow">STAY CURIOUS</span><h2>Make room for a brighter forecast.</h2><p>Explore guides and stories that bring a little clarity to your everyday.</p></div><Link href="/blog" className="button button-light">Read the journal <span>↗</span></Link><span className="newsletter-spark">✳</span></div></section>
    </main>
  );
}
