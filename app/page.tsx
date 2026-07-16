import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import AchievementMarquee from "@/components/AchievementMarquee";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <AchievementMarquee />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}