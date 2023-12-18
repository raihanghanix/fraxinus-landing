"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const BlogItem = ({ params }) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/post/${params.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setPost(data[0]);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    getData();
  }, [getData, params]);

  return (
    <section className="section flex justify-center items-center max-w-6xl mx-auto px-20 max-[500px]:px-10">
      {isLoading && (
        <div className="">
          <p>Loading...</p>
        </div>
      )}
      {post !== null && !isLoading && (
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-2xl">{post?.title}</h2>
            <p className="text-neutral-500 text-base">{post?.author}</p>
            <p className="text-neutral-500 text-base">
              {Intl.DateTimeFormat("id", {
                dateStyle: "full",
                timeStyle: "short",
              }).format(new Date(post?.created_at))}
            </p>
          </div>
          <hr />
          <div className="line-clamp-4 w-full">
            <p>{post.content}</p>
          </div>
          <div className="w-full flex justify-end">
            <Link href="/blog" className="underline text-green-500">
              Kembali
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogItem;
