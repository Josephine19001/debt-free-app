"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

interface PageLayoutProps {
  children: React.ReactNode;
  fixed?: boolean;
  minimal?: boolean;
}

export default function PageLayout({ children, fixed = false, minimal = false }: PageLayoutProps) {
  return (
    <div className={fixed ? "page-container-fixed" : "page-container"}>
      {/* Header */}
      {minimal ? (
        <header className="flex items-center justify-start">
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <Logo size={32} />
          </Link>
        </header>
      ) : (
        <header className="flex items-center justify-between">
          <Link href="/">
            <Logo size={40} />
          </Link>
          <a href="#" className="btn-header">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            App Store
          </a>
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer - only show if not minimal */}
      {!minimal && (
        <footer className="mt-auto flex items-center justify-center gap-8">
          <Link href="/privacy" className="link-muted">
            Privacy
          </Link>
          <Link href="/terms" className="link-muted">
            Terms
          </Link>
          <Link href="/blog" className="link-muted">
            Blog
          </Link>
        </footer>
      )}
    </div>
  );
}
