import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ShareNote } from "@/components/ui/ShareNote";

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const notesDirectory = path.join(process.cwd(), "app/notes");
  const filePath = path.join(notesDirectory, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ""),
    openGraph: {
      title: data.title,
      description: data.description,
      images: [{ url: data.img }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.img],
    },
  };
}

export default async function NotePage({
  params,
}: {
  params: { slug: string };
}) {
  const notesDirectory = path.join(process.cwd(), "app/notes");
  const filePath = path.join(notesDirectory, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  const noteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/notes/${params.slug}`;

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
      <div className="flex items-center justify-between">
        <TypographyLead>{data.description}</TypographyLead>
        <ShareNote noteTitle={data.title} noteUrl={noteUrl} />
      </div>
      <div className="mb-4">
        <Badge variant="outline">{data.category}</Badge>
      </div>
      <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-headings:text-foreground text-foreground prose-strong:text-teal-500">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
