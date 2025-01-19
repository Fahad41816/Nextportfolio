/* eslint-disable @typescript-eslint/no-explicit-any */
import { getblogData } from "@/utils/Blog";
import Image from "next/image";
import Link from "next/link";

function BlogCard({ post }: any) {
  return (
    <Link
      href={`Blogs/blog/${post.title}`}
      className="group block dark:bg-[rgb(37,37,37)] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-md mx-auto md:max-w-sm lg:max-w-md"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
        />
      </div>
      <div className="p-6 bg-white dark:bg-gray-800">
        <h3 className="text-xl font-semibold dark:text-white mb-3 group-hover:text-amber-500 transition-colors truncate">
          {post.title}
        </h3>
        <div className="text-gray-600 dark:text-gray-300 text-sm">
          {post.content.replace(/<[^>]*>?/gm, "").substring(0, 100)}...
        </div>
      </div>
    </Link>
  );
}

export default async function BlogSection() {
  const blogs = await getblogData();

  return (
    <section className="  py-20 px-4  max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-12">
          <h2 className="text-[120px] font-bold text-slate-200 dark:text-gray-100/20 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            POSTS
          </h2>
          <h2 className="text-5xl font-bold text-center relative">
            MY <span className="text-amber-500">BLOG</span>
          </h2>
        </div>

        <div className="max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative mt-5 mx-auto">
          {blogs?.data?.map((post: any) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
