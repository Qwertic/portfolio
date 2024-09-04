"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-style-cards";

import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import worksList from "./worksList";

const cards = worksList.map((work, index) => (
  <Card key={work.src} card={work} index={index} />
));

export default function Works() {
  return (
    <div className="w-full overflow-y-auto p-4 sm:p-8">
      <div className="px-4 sm:px-8 md:px-16">
        <TypographyH1>{"Working Experience"}</TypographyH1>
        <div className="mt-4 sm:mt-8">
          <TypographyLead>
            {"Relevant working experiences throughout the years 🧑‍💻"}
          </TypographyLead>
          <Carousel items={cards} />
        </div>
      </div>
    </div>
  );
}
