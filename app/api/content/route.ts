import { NextResponse } from "next/server";

interface Post {
  title: string;
  slug: string;
  content: string;
}

const generatePosts = (numPosts: number): Post[] => {
  const posts: Post[] = [];

  for (let i = 1; i <= numPosts; i++) {
    const post: Post = {
      title: `Post ${i}`,
      slug: `post-${i}`,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Post ${i} content.`,
    };

    posts.push(post);
  }

  return posts;
};

const posts = generatePosts(10);

export async function GET() {
  return NextResponse.json(posts);
}