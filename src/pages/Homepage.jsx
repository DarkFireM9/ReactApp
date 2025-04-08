import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500 text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">¡HolaMundo!</h1>
      <p className="text-lg mb-6">HolaMundo.</p>
      <button 
        onClick={() => navigate("/home")} 
        className="bg-white text-blue-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-200 transition">
        Continuar
      </button>
    </div>
  );
};

export default Homepage;