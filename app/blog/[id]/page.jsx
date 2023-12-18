"use client";

import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Blog = ({ params }) => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const posts = await axios.get(`/api/post/${params.id}`);
      setPosts(posts.data.document);
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
      {posts !== null && !isLoading && (
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-2xl">{posts?.title}</h2>
            <p className="text-neutral-500 text-base">{posts?.author}</p>
            <p className="text-neutral-500 text-base">
              Dibuat pada:{" "}
              {Intl.DateTimeFormat("id", {
                dateStyle: "full",
                timeStyle: "short",
              }).format(new Date(posts?.createdAt))}
            </p>
            <p className="text-neutral-500 text-base">
              Diupdate pada:{" "}
              {Intl.DateTimeFormat("id", {
                dateStyle: "full",
                timeStyle: "short",
              }).format(new Date(posts?.updatedAt))}
            </p>
          </div>
          <hr />
          <div>
            {posts?.content?.split("\n").map((line, i) => (
              <p key={i}>
                {line}
                <br />
              </p>
            ))}
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

export default Blog;
