import Image from "next/image";

export default async function Post({ params }) {
  const { id } = await params;

  const response = await fetch(
    `https://fb-rest-race-default-rtdb.firebaseio.com/posts/${id}.json`
  );
  const post = await response.json();
  console.log(post);

  return (
    <div className="page">
      <main className="main">
        <h1>{post.caption}</h1>
        <Image
          src={post.image}
          className="post_image"
          width="300"
          height="400"
          alt={post.caption}
        />
      </main>
    </div>
  );
}
