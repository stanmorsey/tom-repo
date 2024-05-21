"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Shamiri Institute",
    description: "This is a Mental Health organization that helps youth thrive in the society",
    image: "/images/projects/1.png",
    tag: ["All", "Achievements"],
    gitUrl: "https://www.shamiri.institute/",
    previewUrl: "/images/projects/1.png ",
  },
  {
    id: 2,
    title: "Green Char Project",
    description: "Green Char is a project that I started mainly to help cater for the envisronment as the people depending on it still get all that they need",
    image: "/images/projects/2.png",
    tag: ["All", "Achievements"],
    gitUrl: "/",
    previewUrl: "/images/projects/2.png",
  },
  {
    id: 3,
    title: "Shamiri Health",
    description: "Shamiri Health is a subsidue linked from Shamiri Institute Catering for healthCare",
    image: "/images/projects/3.png",
    tag: ["All", "Achievements"],
    gitUrl: "/",
    previewUrl: "/images/projects/3.png",
  },
  {
    id: 4,
    title: "Speaking events & workshops",
    description: "Tom has spoken at numerous technology and entrepreneur conferences, governmental, public policy, and international relations conferences, scientific symposia, as well as at private gatherings of CEOs and philanthropists.",
    image: "/images/projects/4.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/images/projects/4.png",
  },
  {
    id: 5,
    title: "Motivational Talk",
    description: "Tom does the motivational talks to various groups of people enabling them to thrive",
    image: "/images/projects/5.png",
    tag: ["All", "Achievements"],
    gitUrl: "/",
    previewUrl: "/images/projects/5.png",
  },
  {
    id: 6,
    title: "Research Training Institute",
    description: "Tom started a research training institute that helps the passionate people to grow their research skills",
    image: "/images/projects/6.png",
    tag: ["All", "Achievements"],
    gitUrl: "/",
    previewUrl: "/images/projects/6.png",
  },
  {
    id: 7,
    title: "Shamiri Academy",
    description: "Tom Started an academy that helps challenge the societies from having uneducated persons by providing a fair education",
    image: "/images/projects/7.png",
    tag: ["All", "Projects"],
    gitUrl: "7",
    previewUrl: "/images/projects/7.png",
  },
  {
    id: 8,
    title: "Shamiri Branding",
    description: "This is a site where substances can be branded with respect to the owers desire",
    image: "/images/projects/8.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/images/projects/8.png",
  },





                                                                                 {
                                              id: 9,
                                              title: "Youth Motivation Fund",
                                              description: "This is a project that is meant to embark on considering the talented youths without education Aid",
                                              image: "/images/projects/9.png",
                                              tag: ["All", "Projects"],
                                              gitUrl: "/",
                                              previewUrl: "/images/projects/9.png",
                                            },
                                            {
                                              id: 10,
                                              title: "Shamiri Automotive Uber",
                                              description: "This is an advanced uber form that is relatively cheaper as compared to other ",
                                              image: "/images/projects/10.png",
                                              tag: ["All", "Projects"],
                                              gitUrl: "/",
                                              previewUrl: "/images/projects/2.png",
                                            },
                                            {
                                              id: 11,
                                              title: "Fulfilling the otential of Africa's youth",
                                              description: "As a mental health pioneer, Tom co-founded the Shamiri Institute to provide world class mental health to Sub-Saharan Africa's Youth",
                                              image: "/images/projects/11.png",
                                              tag: ["All", "Projects"],
                                              gitUrl: "/",
                                              previewUrl: "/images/projects/2.png",
                                            },
                                            {
                                              id: 12,
                                              title: "Decolonize the mind",
                                              description: "Conversation on the past, present and the future of Africa",
                                              image: "/images/projects/12.png",
                                              tag: ["All", "Projects"],
                                              gitUrl: "/",
                                              previewUrl: "/images/projects/2.png",
                                            },
                                            {
                                              id: 13,
                                              title: "How we are making the world a Better Place",
                                              description: "Through pioneering work in mental health, clean energy and with a focus on Africa's youth.",
                                              image: "/images/projects/13.png",
                                              tag: ["All", "Projects"],
                                              gitUrl: "/",
                                              previewUrl: "/",
                                            },
                                            {
                                              id: 14,
                                              title: "Rethinking Mental Health For Africa",
                                              description: "Shamiri Institute is a data-driven benefit organization that uses cutting edge social science",
                                              image: "/images/projects/14.png",
                                              tag: ["All", "Projects"],
                                              gitUrl: "/",
                                              previewUrl: "/",
                                            },
                                            {
                                              id: 15,
                                              title: "Embracing the role of art in the world",
                                              description: "Cultural Agents is a plartform for academics, artists, community leaders and citizens in general",
                                              image: "/images/projects/15.png",
                                              tag: ["All", "Achievements"],
                                              gitUrl: "/",
                                              previewUrl: "/",
                                            }
                                          




  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects & Achievements
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Achievements"
          isSelected={tag === "Achievements"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag === "Projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
