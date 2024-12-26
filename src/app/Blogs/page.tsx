import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Own Your Audience by Creating an Email List",
    excerpt:
      "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b",
    image:
      "https://www.superoffice.com/globalassets/blog/2021/b2b-email-list/email-list-1200x640_blog-cover.png?v=4adc06",
    slug: "email-list",
  },
  {
    id: 2,
    title: "Top 10 Toolkits for Deep Learning in 2022",
    excerpt:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhNjPH7BgvHLZkMqljO9hmL8lap6ONNfckg&s",
    slug: "deep-learning-toolkits",
  },
  {
    id: 3,
    title: "Everything You Need to Know About Web Accessibility",
    excerpt:
      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEc_CaHVgSh91_dCQeoyN6B8LdFn5i1ynEOQ&s",
    slug: "web-accessibility",
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block dark:bg-[rgb(37,37,37)] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 max-w-[350px] mx-auto"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold dark:text-white mb-3 group-hover:text-amber-500 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-300 line-clamp-2">{post.excerpt}</p>
      </div>
    </Link>
  );
}

export default function BlogSection() {
  return (
    <section className="py-20 px-4 dark:bg-[#111111] max-w-7xl mx-auto">
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
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
