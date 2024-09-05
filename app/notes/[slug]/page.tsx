import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";

import {
  TypographyH1,
  TypographyLead,
  TypographyMuted,
} from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const notesDirectory = path.join(process.cwd(), "app/notes");
  const files = fs.readdirSync(notesDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const notesDirectory = path.join(process.cwd(), "app/notes");
  const filePath = path.join(notesDirectory, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  return (
    <div className="flex flex-col gap-4 pb-8 mx-auto max-w-3xl">
      <Button className="w-fit" variant="ghost" asChild>
        <Link href="/notes">
          <Image
            src={"/arrow-left.svg"}
            alt="arrow left icon"
            className="h-4 w-4 sm:h-6 sm:w-6 mr-2"
            width={6}
            height={6}
          />
          Back to notes
        </Link>
      </Button>
      {data.img && (
        <div className="w-full h-64 relative mb-4">
          <Image
            src={data.img}
            alt={data.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <TypographyMuted>{data.date}</TypographyMuted>
      <TypographyH1>{data.title}</TypographyH1>
      <TypographyLead>{data.description}</TypographyLead>
      <div className="mb-4">
        <Badge variant="outline">{data.category}</Badge>
      </div>
      <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-headings:text-foreground text-foreground prose-strong:text-teal-500">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
