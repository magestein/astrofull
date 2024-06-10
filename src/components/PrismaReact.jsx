import { useEffect, useState } from "react";
import { actions } from "astro:actions";

export default function PrismaReact() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await actions.getUsers.safe();

      if (error) {
        setError(error);
      } else {
        console.log(data);
        setUsers(data);
      }
    }

    fetchData();
  }, [1]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {users?.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </div>
  );
}
