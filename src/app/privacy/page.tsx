import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy – Daily Vitamins',
  description: 'Privacy policy for the Daily Vitamins app and website.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition mb-10"
        >
          ← Back to Daily Vitamins
        </Link>

        <h1 className="font-heading font-bold text-4xl text-app-text mb-2">Privacy Policy</h1>
        <p className="text-text-secondary text-sm mb-10">Last updated: February 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-app-text">

          <section>
            <h2 className="font-heading font-semibold text-xl mb-3">Overview</h2>
            <p className="text-text-secondary leading-relaxed">
              Daily Vitamins ("we", "us", "our") is a habit-building app for kids, parents, and coaches. This policy explains what information we collect, how we use it, and the choices you have. We take privacy seriously — especially when it comes to children.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl mb-3">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2 text-text-secondary leading-relaxed">
              <li><strong className="text-app-text">Account information:</strong> Name and email address when you sign up.</li>
              <li><strong className="text-app-text">Activity data:</strong> Vitamins assigned and completed, streaks, points, and proof submissions (photos, videos, or check-ins).</li>
              <li><strong className="text-app-text">Usage data:</strong> How you interact with the app (screens visited, features used) to help us improve the product. This data is not linked to your identity.</li>
              <li><strong className="text-app-text">Waitlist email:</strong> If you join the waitlist on our website, we store your email address to notify you when the app launches.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2 text-text-secondary leading-relaxed">
              <li>To operate the app and provide core features (activity tracking, coach–kid connections, progress reporting).</li>
              <li>To send account-related notifications (activity reminders, proof review results).</li>
              <li>To understand how the app is used so we can fix bugs and improve features.</li>
              <li>To contact waitlist members when the app is available.</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-3">
              We do not sell your personal information. We do not use your data for advertising.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl mb-3">Children's Privacy</h2>
            <p className="text-text-secondary leading-relaxed">
              Daily Vitamins is designed for use by children under the supervision of a parent or coach. Child accounts are created by and linked to an adult (parent or coach) who is responsible for the account. We collect only the information necessary to operate the app. We do not knowingly collect personal information from children without verifiable parental consent through the adult account holder.
            </p>
            <p className="text-text-secondary leading-relaxed mt-3">
              If you believe a child has provided us with personal information without appropriate consent, please contact us at <a href="mailto:privacy@dailyvitamins.app" className="text-primary hover:underline">privacy@dailyvitamins.app</a> and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl mb-3">Third-Party Services</h2>
            <p className="text-text-secondary leading-relaxed">
              We use the following third-party services to operate Daily Vitamins:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-text-secondary leading-relaxed mt-3">
              <li><strong className="text-app-text">Supabase</strong> — database and file storage for account data, activity records, and proof submissions.</li>
              <li><strong className="text-app-text">PostHog</strong> — anonymous product analytics to understand feature usage. No personally identifiable information is sent.</li>
              <li><strong className="text-app-text">Expo / Apple / Google</strong> — push notification delivery for activity reminders and coach messages.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl mb-3">Data Retention</h2>
            <p className="text-text-secondary leading-relaxed">
              We retain your account data for as long as your account is active. You may delete your account at any time from the app's Settings screen, which will permanently remove your personal data within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl mb-3">Your Rights</h2>
            <p className="text-text-secondary leading-relaxed">
              You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="mailto:privacy@dailyvitamins.app" className="text-primary hover:underline">privacy@dailyvitamins.app</a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl mb-3">Changes to This Policy</h2>
            <p className="text-text-secondary leading-relaxed">
              We may update this policy from time to time. If we make material changes, we will notify users via the app or by email. Continued use of the app after changes take effect constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-xl mb-3">Contact</h2>
            <p className="text-text-secondary leading-relaxed">
              Questions about this policy? Email us at{' '}
              <a href="mailto:privacy@dailyvitamins.app" className="text-primary hover:underline">
                privacy@dailyvitamins.app
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
