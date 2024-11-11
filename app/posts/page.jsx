import Link from "next/link";

export default async function Posts() {
  const response = await fetch(
    "https://fb-rest-race-default-rtdb.firebaseio.com/posts.json"
  );
  const dataObject = await response.json();
  console.log(dataObject);

  const posts = Object.keys(dataObject).map((key) => {
    return {
      id: key,
      ...dataObject[key],
    };
  });

  console.log(posts);

  return (
    <div className="page">
      <main className="main">
        <h1>Posts</h1>
        <h2>Here is a list of posts:</h2>
        <ol>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>{post.caption}</Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}
