// ...existing code...
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { CharacterInfo } from "../components/CharacterInfo";

export const Home = () => {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useCounter(1);
  const { loading, data, error } = useFetch(
    `https://thesimpsonsapi.com/api/characters/${count}`
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-[#f5f7fa] via-[#e8eaf6] to-[#cfd8dc] px-2 py-6">
      <main
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl flex flex-col items-center px-4 py-8 md:px-8 md:py-10"
        style={{ boxShadow: "0 6px 32px 0 rgba(60, 60, 90, 0.10)" }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#2d3142] text-center tracking-tight">
          Personajes de los Simpsons
        </h1>

        {loading && <Loading />}
        {error && (
          <p className="text-[#ef476f] bg-[#ffe5ec] p-4 rounded-xl w-full text-center font-medium">
            {error.message}
          </p>
        )}
        {data && !loading && (
          <div className="w-full flex flex-col items-center">
            <CharacterInfo character={data} />
            <div className="flex flex-row justify-center gap-3 mt-6 w-full">
              <button
                className="flex-1 bg-[#3a86ff] text-white font-semibold py-3 px-3 rounded-xl shadow hover:bg-[#265d97] transition-all focus:outline-none text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2 min-w-0"
                onClick={handleDecrement}
              >
                <span style={{ fontSize: 18 }}>←</span>
                <span className="truncate">Anterior</span>
              </button>
              <button
                className="flex-1 bg-[#3a86ff] text-white font-semibold py-3 px-3 rounded-xl shadow hover:bg-[#265d97] transition-all focus:outline-none text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2 min-w-0"
                onClick={handleReset}
              >
                <span style={{ fontSize: 18 }}>🏠</span>
                <span className="truncate">Inicio</span>
              </button>
              <button
                className="flex-1 bg-[#3a86ff] text-white font-semibold py-3 px-3 rounded-xl shadow hover:bg-[#265d97] transition-all focus:outline-none text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2 min-w-0"
                onClick={handleIncrement}
              >
                <span className="truncate">Siguiente</span>
                <span style={{ fontSize: 18 }}>→</span>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
