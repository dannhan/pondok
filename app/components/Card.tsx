import type { Post } from "../utils/sanity";
import { formatDate } from "../utils";
// import { urlFor } from "../utils/image";
import Image from "next/image";
interface Props {
  post: Post;
}

export default function Card({ post }: Props) {
  return (
    <a
      href={"post/" + post.slug.current}
      className="relative top-0 flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-75 ease-in-out hover:-top-2 hover:shadow-xl"
      data-test="article-card"
    >
      <Image
        // src={
        //   post.mainImage
        //     ? urlFor(post.mainImage).width(500).height(300).url()
        //     : "/placeholder.png"
        // }
        src="/placeholder.png"
        alt={post.title || ""}
        width={360}
        height={192}
        className="object-cover w-full [aspect-ratio:6/4]"
      />

      <div className="flex gap-4 flex-col justify-between grow px-8 py-6">
        <h2 className="text-2xl font-bold leading-tight">{post.title}</h2>

        <p className="items-center text-xs text-gray-600">
          <time>{formatDate(post._createdAt)}</time>
        </p>
      </div>
    </a>
  );
}
