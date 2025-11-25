export const CharacterInfo = ({ character }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden w-full border border-gray-200 animate-fade-in">
      <div className="relative bg-gray-100">
        <img
          className="w-full h-80 object-contain"
          src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
          alt={character.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6 text-[#1e293b]">
          {character.name}
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
            <span className="text-2xl">💚</span>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Estado
              </p>
              <p className="text-base font-bold text-gray-900">
                {character.status}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
            <span className="text-2xl">💼</span>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Ocupación
              </p>
              <p className="text-base font-bold text-gray-900">
                {character.occupation}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
            <span className="text-2xl">👤</span>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Género
              </p>
              <p className="text-base font-bold text-gray-900">
                {character.gender}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
