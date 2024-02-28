"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ProjectType } from "@/types";
import { convertDate } from "./convertDate";

type ProjectProps = {
  project: ProjectType;
};

export default function Project({ project }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 flex justify-center w-full"
    >
      <section className="flex flex-col-reverse sm:flex-row bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-odd:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 w-full">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-odd:ml-[18rem]">
          <Link
            className="cursor-pointer  hover:underline"
            href={project.meta.link || '/projects/' + project.slug} passHref key={project.slug}
          >
            <h3 className="text-2xl font-semibold text-blue-600">{project.meta.title}</h3>
          </Link>
          <div>
            <time className="text-sm text-gray-500">{convertDate((project.meta.date) as Date)}</time>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm line-clamp-[8]">
            {project.meta.description}
          </p>
          <div className={`sm:mt-auto ${project.meta.technologies.length > 8 && "md:h-1/4 md:hover:h-auto transition-all"}`}>
            <ul className="flex flex-wrap mt-4 gap-2">
              {project.meta.technologies.map((technology, index) => (
                <li
                  className="bg-primary/85 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-white/80 rounded-full dark:text-white/70"
                  key={index}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
            className="cursor-pointer"
            href={project.meta.link || '/projects/' + project.slug} passHref key={project.slug}
          >
            <Image
              src={project.meta.image}
              alt="Project I worked on"
              quality={95}
              width={400}
              height={400}
              className="sm:absolute  top-12 -right-20 w-full sm:w-3/5 rounded-t-lg sm:shadow-2xl
                  transition 
                  group-hover:scale-[1.04]
                  group-hover:-translate-x-3
                  group-hover:translate-y-3
                  group-hover:-rotate-2

                  group-odd:group-hover:translate-x-3
                  group-odd:group-hover:translate-y-3
                  group-odd:group-hover:rotate-2

                  sm:group-odd:right-[initial] group-odd:-left-20"
            />
          </Link>
      </section>
    </motion.div>
  );
}
