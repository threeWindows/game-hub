import useGanres from "../hooks/useGanres";

const GanreList = () => {
  const { data } = useGanres();

  return (
    <div>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GanreList;
