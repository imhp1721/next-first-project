import Image from "next/image";

export default async function User({ params }) {
  const { id } = await params;

  const response = await fetch(
    `https://fb-rest-race-default-rtdb.firebaseio.com/users/${id}.json`
  );
  const user = await response.json();
  console.log(user);

  return (
    <div className="page">
      <main className="main">
        <h1>{user.name}</h1>
        <Image
          src={user.image}
          className="user_image"
          width="300"
          height="400"
          alt={user.name}
        />
        <p>{user.title}</p>
        <p>
          <a href={`mailto:${user.mail}`}>{user.mail}</a>
        </p>
      </main>
    </div>
  );
}
