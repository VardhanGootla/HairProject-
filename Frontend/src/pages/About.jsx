export default function About() {
  const maleStages = [
    {
      stage: "Stage 1",
      title: "Normal hairline",
      desc: "No visible hair loss",
      hair: 1,
    },
    {
      stage: "Stage 2",
      title: "Slight recession",
      desc: "Slight hairline recession (M shape starts from the temples)",
      hair: 2,
    },
    {
      stage: "Stage 3",
      title: "Deep recession",
      desc: "Deep recession • Clear balding starts (front or crown)",
      hair: 3,
    },
    {
      stage: "Stage 4",
      title: "Front + crown",
      desc: "Hair loss in both front and crown • Some hair remains in between",
      hair: 4,
    },
    {
      stage: "Stage 5",
      title: "Areas connect",
      desc: "Bald areas start connecting",
      hair: 5,
    },
    {
      stage: "Stage 6",
      title: "Top mostly gone",
      desc: "Most hair on the top is gone • Only side hair remains",
      hair: 6,
    },
    {
      stage: "Stage 7",
      title: "Almost complete baldness",
      desc: "Almost complete baldness (only sides/back hair remain)",
      hair: 7,
    },
  ];


  const femaleStages = [
  {
    stage: "Stage 1",
    title: "Slight thinning",
    desc: "Slight thinning (parting starts to widen)",
    hair: 1,
  },
  {
    stage: "Stage 2",
    title: "Noticeable thinning (top)",
    desc: "Noticeable thinning on the top • Hair volume appears reduced",
    hair: 2,
  },
  {
    stage: "Stage 3",
    title: "Severe thinning",
    desc: "Severe thinning • Scalp starts to become visible",
    hair: 3,
  },
];

  function StageArt({ variant, level }) {
    const fill = "fill-brand-text/80";
    const skin = "fill-brand-border";
    const bg = "bg-brand-bg";

    // Very simple, clean “photo-like” illustration cards (no inline CSS).
    // variant: "male" | "female"
    // level: 1..7 (male) or 1..3 (female)
    const maleHair = {
      1: "M8 10 C 13 6, 19 6, 24 10 C 25 8, 26 7, 28 6 C 26 4, 23 3, 16 3 C 9 3, 6 4, 4 6 C 6 7, 7 8, 8 10 Z",
      2: "M9 10 C 13 7, 19 7, 23 10 C 24 8, 26 7, 28 7 C 26 5, 23 4, 16 4 C 9 4, 6 5, 4 7 C 6 7, 8 8, 9 10 Z",
      3: "M10 11 C 13 9, 19 9, 22 11 C 23 9, 25 9, 28 9 C 25 7, 22 6, 16 6 C 10 6, 7 7, 4 9 C 7 9, 9 9, 10 11 Z",
      4: "M11 12 C 13 11, 19 11, 21 12 C 22 11, 25 11, 28 11 C 25 10, 22 9, 16 9 C 10 9, 7 10, 4 11 C 7 11, 10 11, 11 12 Z",
      5: "M12 12 C 13 12, 19 12, 20 12 C 21 12, 25 12, 28 12 C 25 12, 22 11, 16 11 C 10 11, 7 12, 4 12 C 7 12, 11 12, 12 12 Z",
      6: "M14 13 C 14 13, 18 13, 18 13 C 20 13, 24 13, 28 13 C 25 13, 22 13, 16 13 C 10 13, 7 13, 4 13 C 8 13, 12 13, 14 13 Z",
      7: "",
    };

    const femalePart = {
      1: { line: "M16 6 L16 23", width: "stroke-[2.2]" },
      2: { line: "M16 6 L16 23", width: "stroke-[3.4]" },
      3: { line: "M16 6 L16 23", width: "stroke-[5]" },
    };

    return (
      <div className={`rounded-xl border border-brand-border ${bg} p-4`}>
        <div className="rounded-xl bg-brand-white border border-brand-border p-4">
          <svg
            viewBox="0 0 32 32"
            className="w-full h-28"
            role="img"
            aria-label="Hair stage illustration"
          >
            <rect x="0" y="0" width="32" height="32" rx="10" className="fill-brand-bg" />
            <circle cx="16" cy="16" r="10" className={skin} />

            {variant === "male" ? (
              <>
                {level !== 7 && (
                  <path d={maleHair[level]} className={fill} />
                )}
                {/* side hair suggestion for later stages */}
                {level >= 5 && (
                  <>
                    <path
                      d="M6 16 C 6 21, 8 24, 10 25 C 7 23, 6 20, 6 16 Z"
                      className={fill}
                      opacity="0.55"
                    />
                    <path
                      d="M26 16 C 26 21, 24 24, 22 25 C 25 23, 26 20, 26 16 Z"
                      className={fill}
                      opacity="0.55"
                    />
                  </>
                )}
                {level === 7 && (
                  <>
                    <path
                      d="M6 14 C 6 22, 9 26, 12 27 C 8 25, 7 20, 7 14 Z"
                      className={fill}
                      opacity="0.75"
                    />
                    <path
                      d="M26 14 C 26 22, 23 26, 20 27 C 24 25, 25 20, 25 14 Z"
                      className={fill}
                      opacity="0.75"
                    />
                    <path
                      d="M10 26 C 13 28, 19 28, 22 26 C 20 29, 12 29, 10 26 Z"
                      className={fill}
                      opacity="0.75"
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <path
                  d="M7 13 C 9 7, 13 5, 16 5 C 19 5, 23 7, 25 13 C 24 10, 22 9, 20 8 C 18 7, 14 7, 12 8 C 10 9, 8 10, 7 13 Z"
                  className={fill}
                  opacity="0.85"
                />
                <line
                  x1="16"
                  y1="7"
                  x2="16"
                  y2="24"
                  className={`stroke-brand-bg ${femalePart[level].width}`}
                  strokeLinecap="round"
                />
                <path
                  d="M7 13 C 7 20, 11 25, 16 25 C 21 25, 25 20, 25 13"
                  className={fill}
                  opacity="0.2"
                />
              </>
            )}
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-white">
      <section className="bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-brand-text">
            About our approach
          </h1>
          <p className="mt-5 text-base md:text-lg text-brand-muted leading-relaxed max-w-3xl">
            Hair fall is not “one problem”. It has patterns, stages, and triggers that
            differ across women and men. Our aim is to make hair health feel clear,
            premium, and consistent—without overwhelming routines.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold text-brand-green">
                 Female Hair Loss Stages 
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-brand-text">
                Female hair loss stages
              </h2>
            </div>
            <div className="rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-sm text-brand-muted leading-relaxed max-w-2xl">
              <div className="font-semibold text-brand-text"> Important:</div>
              <div className="mt-1">
              In females, the front hairline usually remains intact.
              Complete baldness is rare.
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {femaleStages.map((c) => (
              <div
                key={c.stage}
                className="rounded-xl border border-brand-border bg-brand-white p-6 shadow-soft hover:shadow-card transition duration-300"
              >
                <StageArt variant="female" level={c.hair} />
                <div className="mt-5 flex items-center justify-between">
                  <div className="text-xs font-semibold text-brand-green">{c.stage}</div>
                  <div className="text-xs text-brand-muted">Ludwig</div>
                </div>
                <div className="mt-2 text-base font-semibold text-brand-text">
                  {c.title}
                </div>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div>
            <div className="text-sm font-semibold text-brand-green">
               Male Hair Loss Stages 
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-brand-text">
              Male hair loss stages
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {maleStages.map((c) => (
              <div
                key={c.stage}
                className="rounded-xl border border-brand-border bg-brand-white p-6 shadow-soft hover:shadow-card transition duration-300"
              >
                <StageArt variant="male" level={c.hair} />
                <div className="mt-5 flex items-center justify-between">
                  <div className="text-xs font-semibold text-brand-green">{c.stage}</div>
                  <div className="text-xs text-brand-muted"></div>
                </div>
                <div className="mt-2 text-base font-semibold text-brand-text">
                  {c.title}
                </div>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-semibold text-brand-text">
                Our group & aim
              </h2>
              <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed">
                We’re building a modern, clean healthcare experience for hair health—root
                cause clarity, gentle guidance
                <div className="mt-4 text-sm text-brand-muted leading-relaxed text-black">If you’re seeing sudden shedding, patchy loss, or scalp irritation, consult a qualified clinician. This page is for education and staging.</div>
                 
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  {
                    title: "Aim",
                    text: "Make hair fall care simple to understand and easy to follow—so results come from consistency.",
                  },
                  {
                    title: "What we focus on",
                    text: "Assessment, personalization, and tracking—without heavy, confusing steps.",
                  },
                  {
                    title: "What you can expect",
                    text: "Clear routines, soft follow-ups, and a premium interface across mobile and web.",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-xl border border-brand-border bg-brand-white p-6"
                  >
                    <div className="text-sm font-semibold text-brand-text">
                      {x.title}
                    </div>
                    <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                      {x.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-brand-border bg-brand-bg p-8">
                <div className="text-sm font-semibold text-brand-text">
                  Quick note
                </div>
                <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                  If you’re seeing sudden shedding, patchy loss, or scalp irritation,
                  consult a qualified clinician. This page is for education and staging.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/#consultation"
                    className="inline-flex items-center justify-center rounded-xl bg-brand-green text-brand-white px-5 py-3 text-sm font-semibold hover:brightness-95 hover:scale-[1.02] active:scale-[0.99] transition duration-300"
                  >
                    Start consultation
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-brand-white px-5 py-3 text-sm font-semibold text-brand-text hover:shadow-soft transition duration-300"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}