import React, { useState } from "react";

const Multiplestate= () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <h1 className="text-2xl">User Profile</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <p className="mr-40">Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
        <button onClick={handleLogin}>
          {isLoggedIn ? "Welcome, " + username : "Login"}
        </button>
      </div>
      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme} className="border px-6 py-2 mt-4 rounded-full bg-zinc-500 m">Toggle</button>
      </div>
    </div>
  );
};

export default Multiplestate;
