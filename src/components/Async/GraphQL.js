import { useEffect, useState } from "react";

const query = `
    query {
        allLifts {
            name
            elevationGain
            status
        }
    }
`;

const opts = {
  method: "POST",
  headers: { "content-Type": "application/json" },
  body: JSON.stringify({ query }),
};

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{elevationGain}</p>
      <p>{status}</p>
    </div>
  );
}

function GraphQL() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`https:/snowtooth.moonhighway.com`, opts)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  return (
    <div>
      {data.data.allLifts.map((lift, i) => (
        <Lift
          key={i}
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
}

export default GraphQL;
