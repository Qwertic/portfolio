import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  TypographyH1,
  TypographyLead,
  TypographyMuted,
} from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default async function Notes() {
  const notesDirectory = path.join(process.cwd(), "app/notes");
  const files = fs.readdirSync(notesDirectory);

  const notes = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(notesDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: file.replace(".mdx", ""),
        title: data.title,
        date: data.date,
        img: data.img,
        category: data.category,
        description: data.description,
      };
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .reverse();

  return (
    <div className="w-full overflow-y-auto p-4 sm:p-8">
      <div className="px-4 sm:px-8 md:px-16">
        <TypographyH1>{"Thoughts and words 💭"}</TypographyH1>
        <div className="mt-4 sm:mt-8">
          <TypographyLead>{"Some notes about different topics"}</TypographyLead>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {notes.map((note) => (
              <Link key={note.slug} href={`/notes/${note.slug}`}>
                <Card className="h-full flex justify-between flex-col transition-all duration-300 hover:shadow-md hover:shadow-border hover:-translate-y-1">
                  <CardHeader className="p-0">
                    <Image
                      src={note.img}
                      alt={note.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold">{note.title}</h3>
                    <TypographyMuted>{note.description}</TypographyMuted>
                  </CardContent>
                  <CardFooter className="flex justify-between items-baseline mt-4">
                    <Badge variant="outline">{note.category}</Badge>
                    <p className="text-xs text-gray-500 mb-2">{note.date}</p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
