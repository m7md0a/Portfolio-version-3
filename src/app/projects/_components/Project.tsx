"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ProjectType } from "@/types";

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
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-odd:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-odd:ml-[18rem]">
          <Link
            className="cursor-pointer  hover:underline"
            href={project.meta.link || '/projects/' + project.slug} passHref key={project.slug}
          >
            <h3 className="text-2xl font-semibold text-blue-600">{project.meta.title}</h3>
          </Link>
          <div>
            <time className="text-sm text-gray-500">{project.meta.date}</time>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm line-clamp-[8]">
            {project.meta.description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {project.meta.technologies.map((technology, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={project.meta.image}
          alt="Project I worked on"
          quality={95}
          width={400}
          height={400}
          className="absolute hidden sm:block top-12 -right-20 w-[26rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-odd:group-hover:translate-x-3
        group-odd:group-hover:translate-y-3
        group-odd:group-hover:rotate-2

        group-odd:right-[initial] group-odd:-left-20"
        />
      </section>
    </motion.div>
  );
}
