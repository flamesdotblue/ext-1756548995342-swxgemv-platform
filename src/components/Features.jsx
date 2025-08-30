import { Mic, Heart, Calendar, Shield } from 'lucide-react';

function Features() {
  const items = [
    {
      icon: Mic,
      title: 'Voice-first journaling',
      desc: 'Speak your thoughts. Echo turns voice notes into concise, searchable entries.'
    },
    {
      icon: Heart,
      title: 'Emotional patterns',
      desc: 'Visualize moods over time and notice what lifts or drains your energy.'
    },
    {
      icon: Calendar,
      title: 'Gentle prompts',
      desc: 'Daily nudges to reflect—gratitude, intentions, and moments that mattered.'
    },
    {
      icon: Shield,
      title: 'Private by design',
      desc: 'Your journal is encrypted and yours alone. You control what’s shared.'
    }
  ];

  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">A calm space for your inner voice</h2>
          <p className="mt-3 text-slate-600">
            Designed to feel like writing in a quiet notebook—only faster, smarter, and kinder.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <FeatureCard key={it.title} {...it} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="#start" className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-base font-medium hover:bg-slate-800 transition-colors shadow-sm">
            Start Journaling
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 hover:shadow-md transition-shadow">
      <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-sky-200 to-indigo-200 flex items-center justify-center text-slate-700 shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

export default Features;
