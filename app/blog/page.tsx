import type { Metadata } from "next";
import BlogExplorer from "@/components/blog-explorer";
import { posts } from "@/lib/posts";
export const metadata: Metadata = { title: "Weather Journal & Guides" };
export default function BlogPage() {
  return <main className="page-main wrap"><div className="page-intro"><span className="eyebrow">THE SKYCAST JOURNAL</span><h1>Good days start with <span>good insight.</span></h1><p>Weather explainers, seasonal ideas, and practical guides for everyday life.</p></div><BlogExplorer posts={posts} /></main>;
}
