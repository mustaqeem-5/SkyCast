import Link from "next/link";
export default function NotFound() { return <main className="not-found wrap"><span className="not-found-icon">☁</span><span className="eyebrow">404 · LOST IN THE CLOUDS</span><h1>This page drifted away.</h1><p>The page you're looking for may have moved or no longer exists.</p><Link className="button button-primary" href="/">Back to home ↗</Link></main>; }
