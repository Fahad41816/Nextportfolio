/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getSingleblogData } from "@/utils/Blog";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Spinner } from "@nextui-org/react";

const BlogDetails = () => {
  const params = useParams();
  const { blogTitle }: any = params;

  console.log(decodeURIComponent(blogTitle));

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  console.log(blog);

  const title = decodeURIComponent(blogTitle);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getSingleblogData(title);
        setBlog(data?.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogTitle, title]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <Spinner color="primary" size="lg" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <p className="text-gray-600 dark:text-gray-300">Blog not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800  ">
      <div className="max-w-6xl mb-10 mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Blog Image */}
        <div className="relative h-64 w-full">
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Published on: {new Date(blog.publishedAt).toLocaleDateString()}
          </p>

          <div
            className="prose prose-lg dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t dark:border-gray-700 flex justify-end">
          <button
            className="px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
