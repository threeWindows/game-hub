import useData from "./useData";
import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGanres = () => ({ data: genres, isLoading: false, error: null });

export default useGanres;
