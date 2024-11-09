// import { client } from "@/sanity/client";
// import { type SanityDocument } from "next-sanity";
// const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, {});

export const POSTS_QUERY = `*[
  _type == "userProfile"
  && defined(slug.current)
]{_id, title, slug, publishedAt}`;

export const POST_QUERY = `*[_type == "userProfile" && userId.current == $userId][0]`;
