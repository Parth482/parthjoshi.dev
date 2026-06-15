import { motion } from "framer-motion";

const GROUPS = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "C / Java", "SQL"] },
  { title: "Frameworks", items: ["React / Next.js", "React Native", "Node / Express", "Tailwind CSS", "PyTorch"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  { title: "Tools & Cloud", items: ["Docker", "AWS / Azure", "GitHub Actions", "Vercel / PM2", "Postman"] },
];

export function SkillsGrid() {
  return (
    <section className="border-b border-paper/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-heading text-5xl font-semibold text-hazard-orange">02</span>
            <h2 className="text-xs font-medium uppercase tracking-widest mt-4 text-paper/70">_Stack_Inventory</h2>
          </div>
          <p className="hidden md:block max-w-xs text-xs uppercase tracking-[0.2em] text-paper/40">
            Tools I reach for daily. Always adding more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-paper/10">
          {GROUPS.map((g, idx) => (
            <motion.div
              key={g.title}
              className="p-6 border-r border-b border-paper/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ backgroundColor: "rgba(255,87,34,0.06)" }}
            >
              <h3 className="font-heading font-semibold uppercase text-[10px] tracking-[0.25em] text-hazard-orange mb-5">
                {g.title}
              </h3>
              <ul className="space-y-2 font-medium text-sm">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
