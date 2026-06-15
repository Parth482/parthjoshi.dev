import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { HeroMasthead } from "@/components/portfolio/HeroMasthead";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { HazardTicker } from "@/components/portfolio/HazardTicker";
import { SkillsGrid } from "@/components/portfolio/SkillsGrid";
import { FeaturedProject } from "@/components/portfolio/FeaturedProject";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { OtherProjects } from "@/components/portfolio/OtherProjects";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ContactFooter } from "@/components/portfolio/ContactFooter";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { MobileDock } from "@/components/portfolio/MobileDock";
import { CursorSpotlight } from "@/components/portfolio/CursorSpotlight";
import { GitHubGraph } from "@/components/portfolio/GitHubGraph";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parth Joshi — Full-Stack Developer | React, Next.js, Node, React Native" },
      {
        name: "description",
        content:
          "Parth Joshi is a Full-Stack Developer building MERN/MENN, React Native and Web3 systems. Selected works include Medee, TrustForge and a real-time on-demand services platform.",
      },
      { name: "keywords", content: "Parth Joshi, Full Stack Developer, React Developer, Next.js, Node.js, React Native, TypeScript, MongoDB, PostgreSQL, Web3 Developer, India, Gujarat" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Parth Joshi — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Parth Joshi — TypeScript, React, Next.js, Node, React Native, Python. Based in Gujarat, IN.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://parthjoshi.dev/" },
      { property: "og:site_name", content: "Parth Joshi" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Parth Joshi — Full-Stack Developer" },
      { name: "twitter:description", content: "Full-Stack Developer. MERN/MENN, React Native, Web3." },
      { name: "twitter:creator", content: "@Kris1z0" },
    ],
    links: [
      { rel: "canonical", href: "https://parthjoshi.dev/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Parth Joshi",
          url: "https://parthjoshi.dev",
          jobTitle: "Full-Stack Developer",
          address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" },
          email: "mailto:jparth840@outlook.com",
          sameAs: [
            "https://github.com/Parth482",
            "https://www.linkedin.com/in/jparth842",
            "https://x.com/Kris1z0",
          ],
          knowsAbout: [
            "TypeScript", "JavaScript", "Python", "React", "Next.js", "Node.js",
            "React Native", "Tailwind CSS", "PostgreSQL", "MongoDB", "Redis", "Web3",
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      document.body.style.overflow = "";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } else {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loaded]);

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <div className="min-h-screen bg-ink text-paper font-body relative">
        <CursorSpotlight />
        <ScrollProgress />
        <Nav />
        <main>
          <HeroMasthead />
          <AboutSection />
          <HazardTicker />
          <SkillsGrid />
          <FeaturedProject />
          <ProjectGrid />
          <OtherProjects />
          <GitHubGraph />
          <ExperienceSection />
        </main>
        <ContactFooter />
        <MobileDock />
      </div>
    </>
  );
}
