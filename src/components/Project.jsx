import React from "react";
import Title from "./Title";
import { projectsCommand } from "../assets/Data/data";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { cn } from "@/lib/utils";

const Project = () => {
  return (
    <div className="px-5 xl:px-40 lg:px-10" id="project">
      <Title title="Projects" />
      <div className="grid grid-cols-1 gap-4 pt-20 sm:grid-cols-2">
        {projectsCommand.map((project, index) => {
          return (
            <a href={project.link} key={index} target="_blank">
              <div className={cn("rounded-md p-5", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="h-[40vh] w-full"
                >
                  <div className="space-y-4 bg-blend-darken">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => (
                        <Icon className="size-8" key={index} />
                      ))}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
