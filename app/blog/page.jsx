"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    try {
      setIsLoading(true);
      const posts = await axios.get("/api/post");
      setPosts([...posts.data].reverse());
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section
      id="blog"
      className="min-h-screen flex flex-col gap-10 justify-start items-center max-w-6xl max-[900px]:w-full mx-auto px-20 max-[500px]:px-10 mb-20"
    >
      <div className="pt-32 flex items-center justify-center">
        <h1 className="font-bold text-5xl">Blog</h1>
      </div>
      <button
        className="p-5 w-full bg-green-500 text-white font-bold rounded shadow"
        onClick={getData}
      >
        Muat Ulang
      </button>
      {isLoading && (
        <div className="">
          <p>Loading...</p>
        </div>
      )}
      {!isLoading && posts?.length === 0 && (
        <div className="">
          <p>Tidak ada blog untuk ditampilkan.</p>
        </div>
      )}
      {!isLoading &&
        posts?.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="w-full">
            <div className="flex flex-row max-[900px]:flex-col p-10 gap-5 rounded border border-black shadow">
              <div className="flex flex-col gap-5 w-full">
                <h2 className="font-bold text-2xl">{post.title}</h2>
                <div className="flex flex-col gap-3">
                  <p className="text-neutral-500 text-base">{post.author}</p>
                  <p className="text-neutral-500 text-base">
                    {Intl.DateTimeFormat("id", {
                      dateStyle: "full",
                      timeStyle: "short",
                    }).format(new Date(post.created_at))}
                  </p>
                </div>
                <hr className="w-full" />
                <div className="line-clamp-4 w-full">
                  <p>{post.content}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
};

export default Blog;
