import { useEffect, useState } from "react";

export const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
    setLoading(true);
  }, []);
  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow-md space-y-4">
      {loading && <p>Loading... Timer - {count}</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data && (
        <ul className="space-y-2">
          {data.map((user) => (
            <li
              key={user.id}
              className="px-4 py-2 bg-gray-100 rounded-md shadow-sm"
            >
              {user.name} - {user.email}
              Timer - {count}``
              <input
                type="text"
                placeholder="Enter Your Text"
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
