import About from "@/components/Home/About";
import Experience from "@/components/Home/Experience";
import Hero from "@/components/Home/Hero";
import LatestRepos from "@/components/Home/LatestRepos";
import MyCom from "@/components/Home/MyCom";
import Skills from "@/components/Home/Skills";
import Thanks from "@/components/Home/Thanks";
import React from "react";

export default async function page() {  
  return (
    <div className="pt-24 snap-y snap-mandatory">
      <Hero />
      <About />
      <MyCom />
      <Skills />
      <Experience />
      <LatestRepos />
      <Thanks />
    </div>
  );
}
