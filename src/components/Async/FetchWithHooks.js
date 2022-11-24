import { useEffect, useState } from "react";

function GitHubUser({ name, public_repos, url }) {
  return (
    <div>
      <h1>{name}</h1>
      <img height={100} src={url} alt={name}></img>
      <p>Public repos: {public_repos}</p>
    </div>
  );
}

function FetchWithHooks() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/ekater1na`)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  return (
    <GitHubUser
      name={data.login}
      public_repos={data.public_repos}
      url={data.avatar_url}
    />
  );
}

export default FetchWithHooks;
