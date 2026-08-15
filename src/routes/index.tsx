import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/portfolio/TopBar";
import { SideRail } from "@/components/portfolio/SideRail";
import { PillNav } from "@/components/portfolio/PillNav";
import { Hero } from "@/components/portfolio/Hero";
import { Stats } from "@/components/portfolio/Stats";
import { Showcase } from "@/components/portfolio/Showcase";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Journey } from "@/components/portfolio/Journey";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { CustomCursor, ScrollProgress } from "@/components/portfolio/Chrome";


const title = "Fakharullah — Designer & GoHighLevel Expert";
const description =
  "Portfolio of Fakharullah, a designer and GoHighLevel expert building funnels, websites, workflows, automations and integrations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background xl:pr-16">
      <ScrollProgress />
      <CustomCursor />
      <SideRail />
      <TopBar />
      <main>
        <Hero />
        <PillNav />
        <Stats />
        <Showcase />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />

    </div>
  );
}
