export default function Home() {
  return (
    <div className="bg-brand-white">
      {/* Hero */}
      <section className="bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
             
              <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-brand-text">
                Treat HairFall At The
                <span className="text-brand-green"> Root Cause</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-brand-muted leading-relaxed max-w-xl">
                A modern Indian healthcare experience—minimal, premium, and guided by
                experts. Get a plan built around your stage, lifestyle, and goals.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#assesment"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-green text-brand-white px-6 py-3 text-sm font-semibold shadow-soft hover:brightness-95 hover:scale-[1.02] active:scale-[0.99] transition duration-300"
                >
                  Take Assesment
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-brand-white px-6 py-3 text-sm font-semibold text-brand-text hover:shadow-soft transition duration-300"
                >
                  See how it works
                </a>
              </div>

              
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[24px] bg-brand-green/10 blur-2xl" />
              <div className="relative rounded-xl border border-brand-border bg-brand-white shadow-card overflow-hidden">
                <img
                  className="w-full h-[360px] md:h-[440px] object-cover"
                  alt="Doctor consultation"
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="text-sm font-semibold text-brand-text">
                    A plan that fits your routine
                  </div>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                    Simple steps, gentle follow-ups, and progress tracking—built for
                    consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Features */}
      <section id="features" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-text">
            Simple care. Real results.
            
            </h2>
            <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed">
            We design a personalized plan based on your hair stage and root cause — no confusion, just clarity.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Root-cause assessment",
                text: "A structured intake to understand triggers like stress, diet, hormones, and genetics.",
              },
              {
                title: "Personalized routine",
                text: "A plan that fits your schedule with realistic, trackable steps.",
              },
              {
                title: "Expert guidance",
                text: "Doctor and coach support to keep you consistent and confident.",
              },
              {
                title: "Progress tracking",
                text: "See improvements over time with simple check-ins and evidence-based expectations.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-brand-border bg-brand-white p-6 shadow-soft hover:shadow-card transition duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-green/10 grid place-items-center">
                  <div className="h-5 w-5 rounded bg-brand-green/80" />
                </div>
                <div className="mt-4 text-base font-semibold text-brand-text">
                  {f.title}
                </div>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between gap-6 flex-col md:flex-row">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-brand-text">
                How it works
              </h2>
              <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed">
                A clean, guided flow—so you can focus on consistency.
              </p>
            </div>
            <a
              href="assesment"
              className="inline-flex items-center justify-center rounded-xl bg-brand-green text-brand-white px-5 py-3 text-sm font-semibold hover:brightness-95 hover:scale-[1.02] active:scale-[0.99] transition duration-300"
            >
              Get started
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "Step 1",
                title: "Take a quick assessment",
                meta: "Takes 2–4 mins",
              },
              {
                step: "Step 2",
                title: "Get your recommended plan",
                meta: "Takes 5 mins",
              },
              {
                step: "Step 3",
                title: "Follow the routine & track",
                meta: "3–5 months",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-brand-border bg-brand-white p-6 shadow-soft hover:shadow-card transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-brand-green">
                    {s.step}
                  </div>
                  <div className="text-xs text-brand-muted">{s.meta}</div>
                </div>
                <div className="mt-4 text-lg font-semibold text-brand-text">
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <section id="consultation" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="rounded-xl bg-brand-green/10 border border-brand-border p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-text">
              Ready to start your routine?
            </h2>
            <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">
              Talk to a hair coach for free and get a plan designed for your stage.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green text-brand-white px-6 py-3 text-sm font-semibold shadow-soft hover:brightness-95 hover:scale-[1.02] active:scale-[0.99] transition duration-300"
              >
                Book a call
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-brand-white px-6 py-3 text-sm font-semibold text-brand-text hover:shadow-soft transition duration-300"
              >
                Learn hair loss stages
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}