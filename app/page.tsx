// "use client";

import { useEffect, useState } from "react";
import { Post, client, getPosts } from "./utils/sanity";
import Header from "./components/Header";
import Card from "./components/Card";

export default async function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // client
    //   .fetch(`*[_type == "post"] | order(_createdAt desc)`)
    getPosts()
      .then((data) => setPosts(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const posts = await getPosts();

  return (
    <>
      <Header />

      <main className="m-auto w-[1200px] max-w-[calc(100%-2rem)] p-4 text-base">
        <section className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <div key={p.title} className="col-span-1">
              <Card post={p} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
