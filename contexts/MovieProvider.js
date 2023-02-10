import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../core/config";
import { Read } from "../core/databaseCrud";

const MovieContext = createContext({
  movies: [],
  isError: false,
  refreshMovies: () => {},
});

export const useMovies = () => useContext(MovieContext);

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Read(auth ? auth.currentUser.uid : "")
      .then((data) => {
        setMovies(data || []);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [refresh]);

  const refreshMovies = useCallback(() => {
    setRefresh((p) => !p);
  }, []);

  return (
    <MovieContext.Provider
      value={{ movies, isError, refreshMovies, isLoading }}
    >
      {children}
    </MovieContext.Provider>
  );
}
