export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 animate-fade-in">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#6366f1]/20 border-t-[#6366f1] rounded-full animate-spin"></div>
        <div
          className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-[#06d6a0] rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1s" }}
        ></div>
      </div>
      <p className="mt-6 text-base font-semibold text-[#64748b] animate-pulse">
        Cargando personaje...
      </p>
    </div>
  );
};
