import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Bots from "./components/Bots";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="bg-primary min-h-screen selection:bg-highlight selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Bots />
        <Process />
        <Portfolio />
        <CTA />
      </main>
      <footer className="py-10 text-center text-gray-600 text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} KIRILL.DIGITAL — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
