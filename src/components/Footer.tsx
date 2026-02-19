import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
        <div className="flex items-center gap-2">
          <span className="font-heading font-semibold text-app-text">Daily Vitamins</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-primary transition">
            Privacy Policy
          </Link>
          <span className="text-text-muted">Building better kids, one habit at a time.</span>
        </div>
      </div>
    </footer>
  );
}
