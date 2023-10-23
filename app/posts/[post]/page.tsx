import { getPost } from "@/app/utils/sanity";
import { notFound } from "next/navigation";
import { urlFor } from "../../utils/image";
import Header from "@/app/components/Header";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default async function Post({ params }: { params: { post: string } }) {
  const post = await getPost(params.post);

  return post ? (
    <>
      <Header />

      <main className="m-auto w-[1200px] max-w-[calc(100%-2rem)] p-4 text-base">
        <section>
          <h1 className="text-center my-8 uppercase text-3xl font-bold">
            {post.title}
          </h1>

          <Image
            src={
              post.mainImage
                ? urlFor(post.mainImage).width(500).height(300).url()
                : "/placeholder.png"
            }
            alt={post.title || ""}
            priority
            height={250}
            width={500}
            className="w-4/5 m-auto h-auto object-contain"
          />

          <article className="my-8 text-justify [&>p]:py-2 max-w-5xl mx-auto">
            <PortableText value={post.body} />
          </article>
        </section>
      </main>
    </>
  ) : (
    notFound()
  );
}
