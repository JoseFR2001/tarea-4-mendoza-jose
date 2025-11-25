import { Link, useNavigate } from "react-router";

export const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <nav className="bg-white/80 backdrop-blur-md text-gray-900 px-6 py-4 w-full flex justify-between items-center shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <Link
        className="text-lg font-bold text-[#6366f1] hover:text-[#4f46e5] transition-all flex items-center gap-2"
        to="/home"
      >
        <span className="text-2xl">🏠</span>
        <span>Home</span>
      </Link>
      <button
        className="bg-gradient-to-r from-[#f72585] to-[#ef476f] text-white font-semibold py-2 px-5 rounded-xl hover:from-[#ef476f] hover:to-[#f72585] transition-all text-sm shadow-md hover:shadow-lg"
        onClick={() => {
          localStorage.removeItem("isLogged");
          Navigate("/login");
        }}
      >
        Cerrar Sesión
      </button>
    </nav>
  );
};
