import { Mic } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-12 md:pt-28 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Echo your day.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Echo is a calm, voice-first journal that helps you capture thoughts, track emotional patterns, and reflect with clarity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3" id="start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-6 py-3 text-base font-medium shadow-sm hover:bg-slate-800 transition-colors"
              >
                <Mic className="h-5 w-5" />
                Start Journaling
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium text-slate-700 bg-white/70 backdrop-blur-sm ring-1 ring-slate-200 hover:bg-white transition"
              >
                Learn more
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-500" style={{fontFamily:'cursive'}}>Speak freely, we’ll listen softly.</p>
          </div>
          <div className="relative">
            <div className="mx-auto w-full max-w-md">
              <div className="relative rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-300" />
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  </div>
                  <span className="text-sm text-slate-500">Echo Session</span>
                </div>
                <div className="p-6">
                  <div className="rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-100 p-5">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                        <Mic className="h-6 w-6 text-slate-700" />
                      </div>
                      <div>
                        <p className="text-slate-700 font-medium">Tap to record</p>
                        <p className="text-sm text-slate-500">Voice notes become daily reflections</p>
                      </div>
                    </div>
                    <div className="mt-6 h-20 w-full rounded-xl bg-white/80 shadow-inner overflow-hidden relative">
                      <div className="absolute inset-0 opacity-80" aria-hidden>
                        <Waveform />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                      <span>00:00</span>
                      <span>03:00</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-slate-500">
                    <div className="rounded-xl border border-slate-200 bg-white py-3">Gratitude</div>
                    <div className="rounded-xl border border-slate-200 bg-white py-3">Mood</div>
                    <div className="rounded-xl border border-slate-200 bg-white py-3">Intentions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Waveform() {
  const bars = Array.from({ length: 64 });
  return (
    <div className="flex items-end justify-between h-full px-3">
      {bars.map((_, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-gradient-to-t from-sky-300 to-indigo-400"
          style={{ height: `${Math.max(10, (Math.sin(i / 3) + 1) * 35 + (i % 5) * 4)}%` }}
        />
      ))}
    </div>
  );
}

export default Hero;
