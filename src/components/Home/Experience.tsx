"use client";

import Image from "next/image";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Title from "./Title";
import { timeline } from "@/data/timeline";

export default function Experience() {
  return (
    <div className="my-24">
      <Title title='My Experience'/>
      <VerticalTimeline lineColor="#f3f4f6">
        {timeline.map(item => (
          <React.Fragment key={item.title}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                   "rgba(37, 99, 235, 0.04)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:"0.4rem solid rgba(37, 99, 235, 0.2)"
                    // : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              dateClassName="text-primary/80"
              icon={<Image width={25} height={25} alt="icon" className="[svg]:fill-primary" src={item.icon} />}
              iconStyle={{
                background:"white",
                padding: "14px",
                width: '50px',
                height: '50px',
                stroke: 'red'
              }}
            >
              <h3 className="font-semibold capitalize text-primary">{item.title}</h3>
              <p className="!mt-1 !font-normal text-gray-600 flex flex-col">
                {
                    item.descriptions.map((description, index) => (
                        <span key={index + 'desc'}>- {description}</span>
                    ))
                }
                </p>
                <div className='flex gap-x-2 text-primary/80'>
                    {
                        item.links?.map(link => (
                            <a key={link.title} href={link.url} className='hover:underline'>{link.title}</a>
                        ))
                    }
                </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  );
}
