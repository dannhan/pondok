import type { ImageAsset, Slug } from "@sanity/types";
import type { PortableTextBlock } from "@portabletext/types";
import { createClient } from "next-sanity";

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-02-08";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export async function getPosts(): Promise<Post[]> {

  return await client.fetch(`*[_type == "post"] | order(_createdAt desc)`)
}

// export async function getPost(slug: string): Promise<Post> {
//   return await useSanityClient().fetch(
//     groq`*[_type == "post" && slug.current == $slug][0]`,
//     {
//       slug,
//     }
//   );
// }
