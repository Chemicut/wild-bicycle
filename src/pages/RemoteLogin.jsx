import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RemoteLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Imposta una password hard-coded (modifica "mypassword" con quella desiderata)
  const correctPassword = "beatoagostinonovello";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      // Se il login è corretto, reindirizza al pannello remoto
      navigate("/remoteadmin");
    } else {
      setError("Password errata");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login Pannello Remoto</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <div className="flex flex-col mb-4">
          <label className="mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Accedi
        </button>
      </form>
    </div>
  );
};

export default RemoteLogin;