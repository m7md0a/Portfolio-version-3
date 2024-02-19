import ContainerApp from "@/components/ContainerApp";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import TimeLine from "@/components/Home/TimeLine";
import React from "react";

export default function page() {
  return (
    <div className="pt-24">
      <Hero />
      <div className="h-20 w-1 bg-gray-100 rounded-full mx-auto my-14"></div>
      <About />
      <Skills />
      <TimeLine />
    </div>
  );
}
