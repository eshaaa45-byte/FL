import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Architecture from "./components/Architecture";
import Gallery from "./components/Gallery";
import Technology from "./components/Technology";
import Team from "./components/Team";
import Footer from "./components/Footer";

import "./landing.css";

export default function LandingPage() {
  return (
    <div className="landing-page">

      <Navbar />

      <Hero />

      <About />

      <Features />

      <Workflow />

      <Architecture />

      <Gallery />

      <Technology />

      <Team />

      <Footer />

    </div>
  );
}