import WaitlistForm from './WaitlistForm';
import PhoneMockup from './PhoneMockup';
import DesktopMockup from './DesktopMockup';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-background to-background pt-20 pb-24 px-4">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-heading font-semibold px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            Coming Soon — Join the Waitlist
          </span>
        </div>

        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-app-text text-center leading-tight max-w-3xl mx-auto">
          Building Better Kids,{' '}
          <span className="text-primary">One Daily Vitamin</span>{' '}
          at a Time
        </h1>

        <p className="mt-6 text-text-secondary text-lg sm:text-xl text-center max-w-xl mx-auto leading-relaxed">
          Daily Vitamins helps parents and coaches turn habits into streaks —
          keeping kids engaged, accountable, and proud of their progress.
        </p>

        <div className="mt-8 flex justify-center">
          <WaitlistForm />
        </div>

        <div className="mt-16 flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-center">
          <PhoneMockup
            src="/screenshots/kid-home.png"
            alt="Kid daily vitamins feed"
            className="lg:-mb-4 lg:rotate-[-3deg]"
          />
          <DesktopMockup
            src="/screenshots/coach-home.png"
            alt="Coach dashboard"
            className="lg:z-10"
          />
          <PhoneMockup
            src="/screenshots/progress.png"
            alt="Progress and streaks"
            className="lg:-mb-4 lg:rotate-[3deg]"
          />
        </div>
      </div>
    </section>
  );
}
