import React from "react";
import useGanres from "../hooks/useGanres";

const GanreList = () => {
  const { genres } = useGanres();

  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GanreList;
