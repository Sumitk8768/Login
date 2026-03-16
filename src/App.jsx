import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [showLogin, setShowLogin] = useState(false); 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {showLogin ? (
        <Login setToggle={setShowLogin} />
      ) : (
        <Register setToggle={setShowLogin} />
      )}
    </div>
  );
}

export default App;