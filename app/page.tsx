import { getJson } from "./api-client";

type User = { id: number; firstName: string };
type Posts = { posts: { id: number; title: string }[] };
type Comments = { comments: { id: number; body: string }[] };
type Products = { products: { id: number; title: string }[] };

export default async function Home() {
  console.log("Rendering the waterfall page");

  // The user and the products start together. The posts wait for the user and
  // the comments wait for the posts: 3 in sequence.
  const [user, products] = await Promise.all([
    getJson<User>("/users/1", 300),
    getJson<Products>("/products?limit=3&select=title", 500),
  ]);
  const { posts } = await getJson<Posts>(`/posts/user/${user.id}`, 300);
  const { comments } = await getJson<Comments>(
    `/comments/post/${posts[0]?.id ?? 1}`,
    200,
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Waterfall</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Open the panel with the <b>Network</b> pill at the bottom right, or{" "}
        <kbd>Alt+Shift+N</kbd>. This page made four calls: two at once, then two
        that each waited for the one before.
      </p>
      <section>
        <h2 className="font-medium">{user.firstName}&apos;s first post</h2>
        <p>{posts[0]?.title}</p>
        <p className="text-sm text-zinc-500">{comments.length} comments</p>
      </section>
      <section>
        <h2 className="font-medium">Products</h2>
        <ul className="list-disc pl-5">
          {products.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
