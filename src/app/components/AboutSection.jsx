"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Critical Thinking</li>
        <li>Data Analysis</li>
        <li>Communication Skills</li>
        <li>Ampirical Kowledge</li>
        <li>Ethical Awareness</li>
        <li>Interpersonal Skills</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Havard University- Psychology</li>
        <li>Alliance High School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Degree in Psychology-High Honors</li>
        <li>Co-Founder & C.E.O Shamiri Institute</li>
        <li>Co-Founder GreenChar</li>
        <li>World's Best Entrepreneurs</li>
        <li>Youngest in Echoing Green Fellowship</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
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
        <Image src="/images/about-image.png" width={800} height={800} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          With a passion for understanding the intricacies of human behavior and cognition,
          I am Tom Osborn, a dedicated psychology graduate with high honors.
          My journey through academia has been marked by a relentless pursuit of knowledge,
         culminating in a deep appreciation for the complexities of the human mind and its 
         impact on behavior. During my undergraduate studies, I immersed myself in the rich
         tapestry of psychological theories and methodologies, consistently achieving academic 
         excellence and earning high honors in psychology. Through rigorous coursework, research endeavors, and practical experiences, I honed my analytical prowess, research skills, and critical thinking abilities, equipping myself with the tools necessary to navigate the multifaceted realm of psychology
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
