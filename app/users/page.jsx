import Link from "next/link";

export default async function Users({ params }) {
  const { id } = await params;

  const response = await fetch(
    "https://fb-rest-race-default-rtdb.firebaseio.com/users.json"
  );
  const dataObject = await response.json();
  console.log(dataObject);

  const users = Object.keys(dataObject).map((key) => {
    return {
      id: key,
      ...dataObject[key],
    };
  });

  return (
    <div className="page">
      <main className="main">
        <h1>Users</h1>
        <h2>Here is a list of users:</h2>
        <ol>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}
