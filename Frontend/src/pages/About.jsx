import { useNavigate } from "react-router-dom";

export default function About() {

  const navigate = useNavigate();

  // ---------------- STAGES ----------------
  const maleStages = [
    { stage: "Stage 1", title: "Normal hairline", desc: "No visible hair loss", hair: 1 },
    { stage: "Stage 2", title: "Slight recession", desc: "M shape starts from temples", hair: 2 },
    { stage: "Stage 3", title: "Deep recession", desc: "Clear balding begins", hair: 3 },
    { stage: "Stage 4", title: "Front + crown", desc: "Both areas affected", hair: 4 },
    { stage: "Stage 5", title: "Areas connect", desc: "Bald areas join", hair: 5 },
    { stage: "Stage 6", title: "Top mostly gone", desc: "Only sides remain", hair: 6 },
    { stage: "Stage 7", title: "Almost bald", desc: "Only side/back hair", hair: 7 },
  ];

  const femaleStages = [
    { stage: "Stage 1", title: "Slight thinning", desc: "Parting widens", hair: 1 },
    { stage: "Stage 2", title: "Noticeable thinning", desc: "Volume reduces", hair: 2 },
    { stage: "Stage 3", title: "Severe thinning", desc: "Scalp visible", hair: 3 },
  ];

  // ---------------- SVG ART (YOUR ORIGINAL) ----------------
  function StageArt({ variant, level }) {
    const fill = "fill-brand-text/80";
    const skin = "fill-brand-border";

    const maleHair = {
      1: "M8 10 C 13 6, 19 6, 24 10 C 25 8, 26 7, 28 6 C 26 4, 23 3, 16 3 C 9 3, 6 4, 4 6 Z",
      2: "M9 10 C 13 7, 19 7, 23 10 C 24 8, 26 7, 28 7 C 26 5, 23 4, 16 4 C 9 4, 6 5, 4 7 Z",
      3: "M10 11 C 13 9, 19 9, 22 11 C 25 7, 22 6, 16 6 C 10 6, 7 7, 4 9 Z",
      4: "M11 12 C 13 11, 19 11, 21 12 C 25 10, 22 9, 16 9 C 10 9, 7 10, 4 11 Z",
      5: "M12 12 C 13 12, 19 12, 20 12 C 25 12, 22 11, 16 11 C 10 11, 7 12, 4 12 Z",
      6: "M14 13 C 18 13, 20 13, 28 13 C 25 13, 22 13, 16 13 C 10 13, 7 13, 4 13 Z",
      7: "",
    };

    const femalePart = {
      1: "stroke-[2.2]",
      2: "stroke-[3.4]",
      3: "stroke-[5]",
    };

    return (
      <div className="rounded-xl border bg-brand-bg p-4">
        <div className="rounded-xl bg-white border p-4">
          <svg viewBox="0 0 32 32" className="w-full h-28">
            <circle cx="16" cy="16" r="10" className={skin} />

            {variant === "male" ? (
              level !== 7 && <path d={maleHair[level]} className={fill} />
            ) : (
              <>
                <path d="M7 13 C 9 7, 13 5, 16 5 C 19 5, 23 7, 25 13" className={fill} />
                <line
                  x1="16"
                  y1="7"
                  x2="16"
                  y2="24"
                  className={`stroke-brand-bg ${femalePart[level]}`}
                />
              </>
            )}
          </svg>
        </div>
      </div>
    );
  }

  // ---------------- NUTRIENTS ----------------
  const nutrients = [
    { title: "Protein", icon: "🥩", key: "protein" },
    { title: "Iron", icon: "🩸", key: "iron" },
    { title: "Biotin", icon: "💊", key: "biotin" },
    { title: "Vitamin D", icon: "☀️", key: "vitamin-d" },
    { title: "Omega-3", icon: "🐟", key: "omega-3" },
    { title: "Zinc", icon: "⚡", key: "zinc" },
  ];

  return (
    <div className="bg-brand-white">

      {/* HERO */}
      <section className="bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-6xl font-semibold">
            IT’S NOT JUST HAIR FALL. <br />
            <span className="text-brand-green">IT’S A SIGNAL.</span>
          </h1>
          <p className="mt-6 text-lg text-brand-muted max-w-2xl">
            Every strand tells something about your body.
          </p>
        </div>
      </section>

     {/* HAIR CYCLE */} <section className="py-20"> <div className="max-w-7xl mx-auto px-6"> <h2 className="text-3xl font-semibold">Hair cycle</h2> <div className="mt-10 grid md:grid-cols-3 gap-6"> {[ { title: "Growth", icon: "🌱" }, { title: "Rest", icon: "⏸️" }, { title: "Shedding", icon: "🍂" }, ].map((item) => ( <div key={item.title} className="p-6 bg-white border rounded-xl hover:shadow-xl transition"> <div className="text-4xl">{item.icon}</div> <h3 className="mt-4 font-semibold">{item.title}</h3> </div> ))} </div> </div> </section>

      {/* FEMALE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Female stages</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {femaleStages.map((c) => (
              <div key={c.stage} className="p-6 border rounded-xl">
                <StageArt variant="female" level={c.hair} />
                <h3 className="mt-4 font-semibold">{c.title}</h3>
                <p className="text-sm text-brand-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MALE */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Male stages</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {maleStages.map((c) => (
              <div key={c.stage} className="p-6 border rounded-xl bg-white">
                <StageArt variant="male" level={c.hair} />
                <h3 className="mt-4 font-semibold">{c.title}</h3>
                <p className="text-sm text-brand-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRIENTS */}
      <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-semibold text-brand-text">
      Build stronger hair from inside
    </h2>

    <p className="mt-4 text-brand-muted max-w-2xl">
      Strong hair starts from what you consume daily — not just what you apply.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

      {nutrients.map((item) => (
        <div
          key={item.key}
          className="p-6 border rounded-2xl bg-white hover:shadow-xl transition duration-300"
        >
          <div className="text-4xl">{item.icon}</div>

          <h3 className="mt-4 text-lg font-semibold text-brand-text">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-brand-muted">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

    </div>
  );
}