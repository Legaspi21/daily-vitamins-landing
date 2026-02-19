const personas = [
  {
    emoji: '👨‍👩‍👧',
    title: 'Parents',
    description:
      "Assign meaningful daily activities, review proof submissions, and celebrate your child's growth — all in one place.",
    colorClass: 'bg-primary/8 border-primary/20',
    accentClass: 'text-primary',
  },
  {
    emoji: '🏀',
    title: 'Coaches',
    description:
      "Keep your whole team accountable between sessions. Track who's putting in the work and send encouragement when it counts.",
    colorClass: 'bg-secondary/8 border-secondary/20',
    accentClass: 'text-secondary',
  },
  {
    emoji: '⭐',
    title: 'Kids',
    description:
      'Complete daily challenges, earn points, build streaks, and unlock rewards — turning hard work into something fun.',
    colorClass: 'bg-success/8 border-success/20',
    accentClass: 'text-success',
  },
];

export default function WhoItsForSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-app-text mb-4">
          Built for Everyone in the Circle
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-lg mx-auto">
          Whether you&apos;re guiding from the sidelines or doing the daily reps — Daily Vitamins has you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div
              key={p.title}
              className={`rounded-app-xl p-6 border shadow-card ${p.colorClass}`}
            >
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className={`font-heading font-semibold text-lg mb-2 ${p.accentClass}`}>{p.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
