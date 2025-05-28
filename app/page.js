import Hero from "@/components/section/hero/Hero";
import Header from "@/components/section/header/Header";
import Stats from "@/components/section/stats/Stats";
import AboutSection from "@/components/section/About/AboutSection";
import Services from "@/components/section/service/Services";
import Challenges from "@/components/section/challenges/Challenges";
import Team from "@/components/section/team/Team";
import BlogSection from "@/components/section/blog/BlogSection";

export default function Home() {
  return (
    <main className={"bg-transparent relative "}>
      <section className="Header-section relative  ">
        <div className="absolute hidden  w-[800px] h-[1200px] bg-blue-400 curved-edge right-0  -z-10 "></div>
        <Header />
        <Hero />
      </section>
      <Stats />
      <AboutSection />
      <Services />
      <Challenges />
      <Team />
      <BlogSection />
      {/* Add more sections as needed */}
    </main>
  );
}
