"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  skills?: string[]; // Optional prop for skills
}

const defaultSkills = [
  "Ruby on Rails",
  "React",
  "Javascript",
  "Postgresql",
  "NextJS",
  "Astro",
  "Tailwind",
  "Docker",
  "AWS",
  "Python",
  "LLMs",
  "Redis",
  "React Native",
  "Expo",
  "Jest",
  "Elasticsearch",
  "Ollama",
  "NodeJS",
  "Typescript",
  "Microservices",
  "Terraform",
  "REST",
];

export default function Skills({ skills = defaultSkills }: SkillsProps) {
  return (
    <div className="flex flex-wrap gap-1 w-auto">
      {skills.map((skill, i) => (
        <Badge key={i} variant="outline">
          {skill}
        </Badge>
      ))}
    </div>
  );
}
