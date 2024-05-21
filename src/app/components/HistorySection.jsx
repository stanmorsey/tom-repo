"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",

  },
  {
    title: "Education",
    id: "education",
    
  },
  {
    title: "Certifications",
    id: "certifications",
   
  },
];

const HistorySection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/projects/7.png" width={800} height={800} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Tom's Main Objectives</h2>
          <p className="text-base lg:text-lg">
             Embarking on an odyssey into the esoteric realm of innovation, Tom delves deep, unfurling the profound exigency of creativity, adaptability, and foresight in deftly navigating the labyrinthine contours of today's ever-fluctuating milieu. With consummate eloquence and perspicacity, he elucidates the bedrock principles that undergird triumphant innovation, proffering invaluable sagacity to august organizations poised at the vanguard amidst perpetual flux.
            Drawing from the wellspring of his experiential reservoir and visionary acumen, Tom's discourse resonates with a profound resonance for Africa's kaleidoscopic identity  its heterogenous tapestry of cultures, burgeoning economic fiefdoms, and obstinate impediments. Through his erudite exposition, he not only delineates the emergent trends and fecund opportunities within the continent's bosom but also confronts the entrenched systemic hurdles that obfuscate the path of progress.
            Furthermore, Tom's narrative transcends the realm of mere observation; it assumes the mantle of a clarion call, illuminating Africa's boundless potential and accentuating the exigent imperative for sustainable development. His panoramic vista proffers an invocation to action, exhorting stakeholders to harness innovation as a veritable fulcrum for societal metamorphosis and to engender a paradigm of inclusive growth that dignifies the multitude of communities strewn across the continent's expanse.
          </p>
          <div className="flex flex-row justify-start mt-8">
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
