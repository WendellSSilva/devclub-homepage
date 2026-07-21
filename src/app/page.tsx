import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Formations from "@/components/Formations";
import Projects from "@/components/Projects";
import Practice from "@/components/Practice";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";
import Journey from "@/components/Journey";
import CTA from "@/components/CTA";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black bg-grid">
      <Header />
      <Hero />
      <Stats />
      <Benefits />
      <Formations />
      <Projects />
      <Practice />
      <Community />
      <Testimonials />
      <Journey />
      <CTA />
      <CursorGlow />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}