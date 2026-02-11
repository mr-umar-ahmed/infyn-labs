import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Image from "next/image";

// -----------------------------
// Sanity Client
// -----------------------------
const client = createClient({
  projectId: "7gb9ayen",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Image URL builder
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
  return builder.image(source);
}

// -----------------------------
// Types
// -----------------------------
interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: SanityImage; // optional for safety
  publishedAt: string;
  excerpt: string;
}

// -----------------------------
// Fetch Posts
// -----------------------------
async function getPosts(): Promise<Post[]> {
  return client.fetch<Post[]>(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
    }
  `);
}

// -----------------------------
// Page Component
// -----------------------------
export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen pt-32 pb-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h1 className="font-heading text-5xl font-bold mb-12 text-center">
          Intel <span className="text-brand-accent">& Insights</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group block bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden hover:border-brand-accent/50 transition-all"
            >
              {/* Image */}
              <div className="h-48 bg-gray-900 relative">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).width(600).height(400).url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                    No Image
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-brand-accent text-xs font-mono mb-2">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>

                <h2 className="text-xl font-bold mb-3 group-hover:text-brand-accent transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
