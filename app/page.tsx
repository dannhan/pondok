"use client";

import { useEffect, useState } from "react";
import { Post, client, getPosts } from "./utils/sanity";
import Header from "./components/Header";
import Card from "./components/Card";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />

      {/* <main className="m-auto w-[1200px] max-w-[calc(100%-2rem)] p-4 text-base"> */}
      <main>
        <article className="max-w-6xl mx-auto px-3">
          <section className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <div key={p.title} className="col-span-1">
                <Card post={p} />
              </div>
            ))}
          </section>
        </article>
      </main>
    </>
  );
}
