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

const ResearchSection = () => {
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
        <Image src="/images/projects/3.png" width={800} height={1600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Research Publications</h2>
          <h3 className="text-3xl font-bold text-white mb-4">In Press</h3> 
          <p className="text-base lg:text-lg">
Wasil, A.R., Park,S.J., Gillespie, S., Venturo-Conerly, K.E., Osborn, T.L., DeRubeis, R.J, Hollon, S.D., Weisz, J.R, &Jones, P.J. (In Press). Which symptoms of depression and anxiety are most strongly associated with happiness? A network analysis of Indian andKenyan adolescents. Journal of Affective Disorders.
Venturo-Conerly, K., Roe, E., Wasil, A., Osborn, T.L, Ndetei,D., Musyimi, C., Mutiso, V., Wasanga, C., Weisz, J. (InPress). Training and supervising lay-providers in Kenya: Strategies and mixed-methods outcomes.Cognitive and Behavioral Practice.
Wasil, A.R., Venturo-Conerly, K.E., Gillespie, S., Osborn, T.L. (In Press). In their own words: Using open-ended assessment to identify culturally relevant concerns among Kenyan adolescents. Culture, Medicine, and Psychiatry.
Venturo-Conerly, K., Roe, E., Wasil, A., Osborn, T.L, Ndetei,D., Musyimi, C., Mutiso, V., Wasanga, C., Weisz, J. (InPress). Training and supervising lay-providers in Kenya: Strategies and mixed-methods outcomes. Cognitive and Behavioral Practice.
Venturo-Conerly, K.E., Osborn, T.L., Wasil, A.R., Huong L., Corrigan, E., Wasanga, C.M., & Weisz, J.R. (In Press). Testing the Effects of the Shamiri Intervention and its components on anxiety, depression, wellbeing, and academic functioning in Kenyan adolescents: Study protocol for a five-arm randomized controlled trial.Trials.
Osborn, T. L., Venturo-Conerly, K. E., Wasil, A. R., Schleider, J. L., & Weisz, J.R. (2020). Depression and Anxiety Symptoms, Social Support, and DemographicFactors Among Kenyan High School Students.Journal of Child and FamilyStudies, 29(5),1432–1443. https://doi.org/10.1007/s10826-019-01646-8
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

export default ResearchSection;
