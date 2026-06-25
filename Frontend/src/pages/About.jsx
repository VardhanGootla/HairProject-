import { useNavigate } from "react-router-dom";

import femaleS1 from "../assets/femaleS1.png";
import femaleS2 from "../assets/femaleS2.png";
import femaleS3 from "../assets/femaleS3.png";

import s1 from "../assets/s1t.webp";
import s2 from "../assets/s2t.webp";
import s3 from "../assets/s3t.webp";
import s4 from "../assets/s4t.webp";
import s5 from "../assets/s5t.webp";
import s6 from "../assets/s6t.webp";
import stage7Male from "../assets/stage7Male.png";

export default function About() {
  const navigate = useNavigate();

  const maleStages = [
    {
      stage: "Stage 1",
      title: "Normal hairline",
      desc: "No visible hair loss",
      image: s1,
    },
    {
      stage: "Stage 2",
      title: "Slight recession",
      desc: "M shape starts from temples",
      image: s2,
    },
    {
      stage: "Stage 3",
      title: "Deep recession",
      desc: "Clear balding begins",
      image: s3,
    },
    {
      stage: "Stage 4",
      title: "Front + crown",
      desc: "Both areas affected",
      image: s4,
    },
    {
      stage: "Stage 5",
      title: "Areas connect",
      desc: "Bald areas join",
      image: s5,
    },
    {
      stage: "Stage 6",
      title: "Top mostly gone",
      desc: "Only sides remain",
      image: s6,
    },
    {
      stage: "Stage 7",
      title: "Almost bald",
      desc: "Only side/back hair",
      image: stage7Male,
    },
  ];

  const femaleStages = [
    {
      stage: "Stage 1",
      title: "Slight thinning",
      desc: "Parting widens",
      image: femaleS1,
    },
    {
      stage: "Stage 2",
      title: "Noticeable thinning",
      desc: "Volume reduces",
      image: femaleS2,
    },
    {
      stage: "Stage 3",
      title: "Severe thinning",
      desc: "Scalp visible",
      image: femaleS3,
    },
  ];

  const nutrients = [
    {
      title: "Protein",
      icon: "🥩",
      key: "protein",
      desc: "Essential building block for strong and healthy hair strands.",
    },
    {
      title: "Iron",
      icon: "🩸",
      key: "iron",
      desc: "Supports oxygen delivery to hair follicles.",
    },
    {
      title: "Biotin",
      icon: "💊",
      key: "biotin",
      desc: "Helps maintain healthy hair growth and strength.",
    },
    {
      title: "Vitamin D",
      icon: "☀️",
      key: "vitamin-d",
      desc: "Supports follicle health and growth cycles.",
    },
    {
      title: "Omega-3",
      icon: "🐟",
      key: "omega-3",
      desc: "Nourishes hair and supports scalp health.",
    },
    {
      title: "Zinc",
      icon: "⚡",
      key: "zinc",
      desc: "Supports hair tissue growth and repair.",
    },
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

      {/* HAIR CYCLE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Hair cycle</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Growth", icon: "🌱" },
              { title: "Rest", icon: "⏸️" },
              { title: "Shedding", icon: "🍂" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white border rounded-xl hover:shadow-xl transition"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEMALE STAGES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Female stages</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {femaleStages.map((c) => (
              <div
                key={c.stage}
                className="p-6 border rounded-xl bg-white hover:shadow-lg transition"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-72 object-contain"
                />

                <h3 className="mt-4 font-semibold">{c.title}</h3>

                <p className="text-sm text-brand-muted mt-2">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MALE STAGES */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Male stages</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {maleStages.map((c) => (
              <div
                key={c.stage}
                className="p-6 border rounded-xl bg-white hover:shadow-lg transition"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-72 object-contain"
                />

                <h3 className="mt-4 font-semibold">{c.title}</h3>

                <p className="text-sm text-brand-muted mt-2">
                  {c.desc}
                </p>
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
            Strong hair starts from what you consume daily — not just what you
            apply.
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