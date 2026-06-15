import { motion } from "framer-motion";

const OTHERS = [
  {
    title: "Dexora",
    body: "Mobile-first crypto token screener with live price, market cap and volume powered by CoinGecko.",
    stack: "React Native · TypeScript · Expo",
    repo: "https://github.com/Parth482/Dexora",
  },
  {
    title: "Stakezen",
    body: "MERN web app with deposits, bets and withdrawals — role-based auth, wallet management, PayPal Sandbox.",
    stack: "MERN · PayPal Sandbox",
    repo: "https://github.com/Parth482/stakezen",
  },
  {
    title: "SecureAuth+",
    body: "Two-factor authentication system with OTP and an integrated anti-phishing flow.",
    stack: "MERN · SMTP · Postman",
    repo: "https://github.com/Parth482/secureauth",
  },
  {
    title: "PharmaVision",
    body: "Generative AI pipeline producing synthetic medical pill images to address limited dataset coverage.",
    stack: "Stable Diffusion · PyTorch · OpenCV",
  },
];

export function OtherProjects() {
  return (
    <section className="py-24 border-b border-paper/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-heading text-5xl font-semibold text-hazard-yellow">04</span>
            <h2 className="text-xs font-medium uppercase tracking-widest mt-4 text-paper/70">_Other_Noteworthy</h2>
          </div>
        </div>

        <ul className="border-t border-paper/10">
          {OTHERS.map((o, idx) => (
            <motion.li
              key={o.title}
              className="grid grid-cols-12 gap-6 items-start py-6 border-b border-paper/10 hover:bg-paper/[0.02] transition-colors group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="col-span-12 md:col-span-3 font-heading font-semibold text-xl tracking-tight group-hover:text-hazard-orange transition-colors">
                {o.title}
              </div>
              <p className="col-span-12 md:col-span-6 text-sm text-paper/70 leading-relaxed">{o.body}</p>
              <div className="col-span-12 md:col-span-3 flex md:justify-end items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest text-paper/40">{o.stack}</span>
                {o.repo && (
                  <a href={o.repo} target="_blank" rel="noreferrer" className="text-[10px] font-semibold uppercase tracking-widest text-hazard-orange hover:text-hazard-yellow">
                    Code →
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
