import Link from "next/link";
import PageLayout from "@/components/PageLayout";

const posts = [
  {
    slug: "debt-avalanche-vs-snowball",
    title: "Debt Avalanche vs Snowball: Which Method is Right for You?",
    excerpt: "Compare two popular debt payoff strategies and find out which one will help you save the most money.",
    date: "Nov 25, 2024",
    readTime: "5 min read",
  },
  {
    slug: "emotional-side-of-debt",
    title: "The Emotional Side of Debt: Managing Stress and Staying Motivated",
    excerpt: "Debt isn't just about numbers. Learn how to handle the emotional challenges of your debt-free journey.",
    date: "Nov 20, 2024",
    readTime: "4 min read",
  },
  {
    slug: "credit-score-while-paying-debt",
    title: "How to Improve Your Credit Score While Paying Off Debt",
    excerpt: "Paying off debt and building credit can go hand in hand. Here's how to do both effectively.",
    date: "Nov 15, 2024",
    readTime: "6 min read",
  },
  {
    slug: "emergency-fund-vs-debt",
    title: "Should You Build an Emergency Fund or Pay Off Debt First?",
    excerpt: "The age-old question answered: when to prioritize savings vs debt repayment.",
    date: "Nov 10, 2024",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <PageLayout>
      <div className="flex-1 overflow-y-auto py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-muted text-sm">
              Tips, strategies, and insights for your debt-free journey.
            </p>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-semibold mb-1">
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted shrink-0">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
