import { getRepos } from "@/axios";
import ContainerApp from "@/components/ContainerApp";
import About from "@/components/Home/About";
import Aside from "@/components/Home/Aside";
import Hero from "@/components/Home/Hero";
import LatestRepos from "@/components/Home/LatestRepos";
import Skills from "@/components/Home/Skills";
import Thanks from "@/components/Home/Thanks";
import TimeLine from "@/components/Home/TimeLine";
import Image from "next/image";
import React from "react";

export default async function page() {
  const repos = await getRepos()
  
  return (
    <div className="pt-24 snap-y snap-mandatory">
      <Hero />
      
      <ContainerApp className="flex max-w-[95rem] min-h-screen">
        <div className="hidden lg:flex justify-center items-center w-1/5 sticky top-0 left-0 h-screen">
          <Aside />
        </div>
        <div className="lg:w-4/5 lg:pt-24">
          <About />
          <Skills />
          <TimeLine />
          {/* <LatestRepos /> */}
          <Thanks />
        </div>
      </ContainerApp>
    </div>
  );
}
