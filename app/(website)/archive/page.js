import Archive from "./archive";

import { getPaginatedPosts } from "@/lib/sanity/client";

const POSTS_PER_PAGE = 9;

export default async function ArchivePage() {
  const posts = await getPaginatedPosts(POSTS_PER_PAGE);
  return <Archive posts={posts} />;
}

export const revalidate = 604800;
