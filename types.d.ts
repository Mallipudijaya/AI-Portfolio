import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

export interface SinglePost extends MarkdownParsedContent {
  description: string;
  type: string;
  date: string;
}

export interface ProjectPost extends SinglePost {
  technologies: string[];
  thumbnail: string;
  url: string;
}

export type Post = SinglePost | ProjectPost
export type PostInjection = Post | undefined