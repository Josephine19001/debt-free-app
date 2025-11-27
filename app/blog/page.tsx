import Link from "next/link";
import PageLayout from "@/components/PageLayout";

const posts = [
  {
    slug: "financial-state-of-americans-2025",
    title: "THE FINANCIAL STATE OF AMERICANS IN 2025",
    excerpt: "Understanding the debt crisis and what it means for your financial future. A deep dive into the numbers that matter.",
    date: "Nov 25, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "debt-avalanche-vs-snowball",
    title: "DEBT AVALANCHE VS. SNOWBALL",
    excerpt: "Which strategy will get you debt-free faster? A comparison of the math and psychology behind both methods.",
    date: "Nov 20, 2025",
    readTime: "7 min read",
  },
  {
    slug: "psychology-of-debt",
    title: "THE PSYCHOLOGY OF DEBT",
    excerpt: "Why it's so hard to break free, and how understanding your mind can help you overcome financial obstacles.",
    date: "Nov 15, 2025",
    readTime: "9 min read",
  },
  {
    slug: "emergency-fund-vs-debt",
    title: "EMERGENCY FUND VS. PAYING OFF DEBT",
    excerpt: "The great debate settled. How to balance building savings while eliminating debt—a practical guide.",
    date: "Nov 10, 2025",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  const featuredPost = posts.find(p => p.featured);
  const otherPosts = posts.filter(p => !p.featured);

  return (
    <PageLayout>
      <div className="flex-1 overflow-y-auto py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight mb-4">
              JOURNAL
            </h1>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto">
              Insights, strategies, and stories for those on the path to financial freedom
            </p>
          </header>

          {/* Featured Post */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block mb-8 group"
            >
              <article className="bg-white/5 rounded-2xl p-6 sm:p-8 transition-all hover:bg-white/10">
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Featured</span>
                  <span>{featuredPost.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
                  {featuredPost.excerpt}
                </p>
              </article>
            </Link>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="h-full bg-white/5 rounded-xl p-5 transition-all hover:bg-white/10 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-serif font-normal tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
