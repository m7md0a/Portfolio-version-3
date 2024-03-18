import About from "@/components/Home/About";
import Experience from "@/components/Home/Experience";
import Hero from "@/components/Home/Hero";
import PinnedRepos from "@/components/Home/PinnedRepos";
import Skills from "@/components/Home/Skills";
import Thanks from "@/components/Home/Thanks";
import React from "react";

export default async function page() {  
  return (
    <div className="pt-24 snap-y snap-mandatory">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <PinnedRepos />
      <Thanks />
    </div>
  );
}
