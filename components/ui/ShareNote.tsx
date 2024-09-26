"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
} from "next-share";
import { toast } from "sonner";

interface ShareNoteProps {
  noteTitle: string;
  noteUrl: string;
}

const shareOptions = ({ noteTitle, noteUrl }: ShareNoteProps) => (
  <>
    <div className="flex items-center ml-2">
      <div className="hover:scale-100 transition-all duration-200 ease-in-out hover:cursor-pointer hover:-translate-y-1">
        <Image
          src="/link.svg"
          alt="link"
          width={20}
          height={20}
          onClick={() => {
            copyToClipboard(noteUrl);
          }}
        />
      </div>

      <FacebookShareButton url={noteUrl} quote={noteTitle}>
        <FacebookIcon
          className="hover:scale-100 transition-all duration-200 ease-in-out hover:cursor-pointer hover:-translate-y-1"
          size={32}
          bgStyle={{ fill: "transparent" }}
        />
      </FacebookShareButton>
      <WhatsappShareButton url={noteUrl} title={noteTitle}>
        <WhatsappIcon
          className="hover:scale-100 transition-all duration-200 ease-in-out hover:cursor-pointer hover:-translate-y-1"
          size={25}
          bgStyle={{ fill: "transparent" }}
        />
      </WhatsappShareButton>
      <RedditShareButton url={noteUrl} title={noteTitle}>
        <RedditIcon
          className="hover:scale-100 transition-all duration-200 ease-in-out hover:cursor-pointer hover:-translate-y-1"
          size={30}
          bgStyle={{ fill: "transparent" }}
        />
      </RedditShareButton>
      <TelegramShareButton url={noteUrl} title={noteTitle}>
        <TelegramIcon
          className="hover:scale-100 transition-all duration-200 ease-in-out hover:cursor-pointer hover:-translate-y-1"
          size={28}
          bgStyle={{ fill: "transparent" }}
        />
      </TelegramShareButton>
      <TwitterShareButton url={noteUrl} title={noteTitle}>
        <TwitterIcon
          className="hover:scale-100 transition-all duration-200 ease-in-out hover:cursor-pointer hover:-translate-y-1"
          size={30}
          bgStyle={{ fill: "transparent" }}
        />
      </TwitterShareButton>
    </div>
  </>
);

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast("Link copied to clipboard!");
  } catch (err) {
    toast(`Failed to copy text: ${err}`);
  }
};
export const ShareNote: React.FC<ShareNoteProps> = ({ noteTitle, noteUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button className="inline-flex items-center">
          <Image
            src="/share.svg"
            alt="Share icon"
            width={16}
            height={16}
            className="mr-2"
          />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {shareOptions({ noteTitle, noteUrl })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
