import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const { values, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });
  const { username, password } = values;

  const handleSubmit = (event) => {
    // prevenir que se reincie el formulario
    event.preventDefault();

    console.log(values);

    localStorage.setItem("isLogged", "true");
    if (onLogin) onLogin();
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <form
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm flex flex-col gap-4 border border-gray-200 animate-fade-in"
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-2">
            Iniciar Sesión
          </h2>
          <p className="text-sm text-[#64748b]">Bienvenido de nuevo</p>
        </div>
        <input
          className="w-full px-4 py-3 border border-gray-200 rounded-xl mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 text-base"
          type="text"
          name="username"
          placeholder="Usuario"
          value={username}
          onChange={handleChange}
          autoComplete="username"
        />
        <input
          className="w-full px-4 py-3 border border-gray-200 rounded-xl mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 text-base"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <button
          className="w-full bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none text-base"
          type="submit"
        >
          Iniciar Sesión
        </button>
      </form>
      <div className="text-center mt-4 w-full max-w-sm">
        <button
          className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium py-2 px-4 rounded-xl transition-all focus:outline-none bg-gray-100"
          type="button"
          onClick={handleReset}
        >
          Limpiar formulario
        </button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-[#64748b]">
          ¿No tienes cuenta?{" "}
          <button
            className="text-[#6366f1] font-semibold hover:text-[#4f46e5] transition-colors"
            onClick={() => navigate("/register")}
          >
            Regístrate
          </button>
        </p>
      </div>
    </div>
  );
};
