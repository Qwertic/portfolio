"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-style-cards";

import { TypographyH1, TypographyLead } from "@/components/ui/typography";

import CallbellDescription from "@/app/works/callbellDescription.mdx";
import LeWagonDescription from "@/app/works/leWagonDescription.mdx";
import JustmeDescription from "@/app/works/justmeDescription.mdx";
import FreelanceDescription from "@/app/works/freelanceDescription.mdx";

const works = [
  {
    company: "LeWagon",
    title: "Cooding bootcamp Student",
    subtitle: "9-week bootcamp at LeWagon in Milan.",
    from: "01/01/2020",
    to: "03/01/2020",
    content: (
      <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-headings:text-foreground text-foreground prose-strong:text-teal-500">
        <LeWagonDescription />
      </article>
    ),
    technologies: [
      "Ruby",
      "Ruby on Rails",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Heroku",
      "Git",
    ],
    src: "/lwgn.png",
  },
  {
    company: "Freelance",
    title: "Freelance Web Developer",
    subtitle: "Freelance and colsulting (Milan)",
    from: "01/03/2020",
    to: "01/05/2020",
    content: (
      <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-headings:text-foreground text-foreground prose-strong:text-teal-500">
        {<FreelanceDescription />}
      </article>
    ),
    technologies: ["HTML", "CSS", "JavaScript", "Heroku", "Git"],
    src: "/fl.png",
  },
  {
    company: "JustMe Technologies",
    title: "Full Stack Developer",
    subtitle: "Full Stack Developer role (Paris/Hybrid)",
    from: "01/06/2020",
    to: "30/06/2020",
    content: (
      <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-headings:text-foreground text-foreground prose-strong:text-teal-500">
        <JustmeDescription />
      </article>
    ),
    technologies: [
      "Angular",
      "Rails API",
      "PostgreSQL",
      "Git",
      "OAuth",
      "OVH",
      "Cloudflare",
      "Figma",
      "REST",
      "JWT",
      "APIs",
    ],
    src: "/jm.png",
  },
  {
    company: "Callbell",
    title: "Full Stack Developer",
    subtitle: "Full Stack Developer role (Full Remote)",
    from: "01/09/2021",
    to: "12/01/2024",
    content: (
      <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-headings:text-foreground text-foreground prose-strong:text-teal-500">
        <CallbellDescription />
      </article>
    ),
    technologies: [
      "React",
      "Node.js",
      "Ruby on Rails",
      "PostgreSQL",
      "Git",
      "Docker",
      "Tailwind CSS",
      "Figma",
      "REST",
      "JWT",
      "APIs",
      "Ansible",
      "Terraform",
      "Github Actions",
      "AWS",
      "Gitlab Runners",
      "Golang",
      "microservices",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Elasticsearch",
    ],
    src: "/clbl.png",
  },
];

const cards = works.map((work, index) => (
  <Card key={work.src} card={work} index={index} />
));

export default function Works() {
  return (
    <div className="w-full overflow-y-auto p-8">
      <div className="px-16">
        <TypographyH1>{"Working Experience"}</TypographyH1>
        <div className="mt-8">
          <TypographyLead>
            {"Relevant working experiences throught the years 🧑‍💻"}
          </TypographyLead>
          <Carousel items={cards} />
        </div>
      </div>
    </div>
  );
}
