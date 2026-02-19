const steps = [
  {
    number: '01',
    icon: '💊',
    title: 'Assign Vitamins',
    description:
      'Parents and coaches create personalized daily activities — from basketball drills to reading goals.',
  },
  {
    number: '02',
    icon: '✅',
    title: 'Kids Complete Daily',
    description:
      'Kids check off activities, snap a photo as proof, and earn points for every vitamin completed.',
  },
  {
    number: '03',
    icon: '🔥',
    title: 'Build Streaks',
    description:
      'Consistent effort builds streaks and unlocks rewards — turning habits into lasting skills.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-app-text mb-4">
          How It Works
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-lg mx-auto">
          Three simple steps that turn daily intentions into real habits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-background rounded-app-xl p-6 shadow-card border border-border"
            >
              <div className="text-3xl mb-3">{step.icon}</div>
              <div className="absolute top-4 right-4 text-5xl font-heading font-bold text-primary/10 select-none">
                {step.number}
              </div>
              <h3 className="font-heading font-semibold text-lg text-app-text mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
