import React from "react";
import Project from "@components/Project";
import Metadata from "@components/MetaData";
import PageTop from "@components/PageTop";
import projectData from "@content/projectData";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import { FadeContainer } from "@content/FramerMotionVariants";
import pageMeta from "@content/meta";

export default function Projects() {
  return (
    <>
      <Metadata
        title={pageMeta.projects.title}
        description={pageMeta.projects.description}
        previewImage={pageMeta.projects.image}
        keywords={pageMeta.projects.keywords}
      />
      <section className="pageTop">
        <PageTop pageTitle="Projects">
          I've been making various types of projects some of them were basics
          and some of them were complicated. My recent{" "}
          <span className="font-bold text-gray-600 dark:text-gray-200">
            {projectData.length}
          </span>{" "}
          projects.
        </PageTop>

        <AnimatedDiv
          variants={FadeContainer}
          className="grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%]"
        >
          {projectData.map((project, index) => {
            if (project.name === "") return null;
            return <Project key={index} project={project} />;
          })}
        </AnimatedDiv>
      </section>
    </>
  );
}
