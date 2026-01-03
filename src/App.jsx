import React from "react";
import { Navbar, Footer } from "./components/layout";
import { Hero, About, Skills, Projects, Experience, Contact } from "./sections";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
