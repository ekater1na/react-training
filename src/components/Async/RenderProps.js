const students = [
  { name: "Ann", city: "Minsk" },
  { name: "Bob", city: "Grodno" },
  { name: "Dan", city: "Brest" },
  { name: "Eva", city: "London" },
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function RenderProps() {
  return (
    <>
      <h1>Render Props</h1>
      <List
        data={students}
        renderEmpty={<p>No data</p>}
        renderItem={(item) => (
          <>
            {item.name} - {item.city}
          </>
        )}
      />
    </>
  );
}

export default RenderProps;
