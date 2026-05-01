import { Link } from "react-router-dom";
import "../style/register.scss";
import { useState } from "react";
import { authHookFunction } from "../hook/Authhook";

function Register() {
  // ✅ Hook component ke andar call hota hai
  const { register, loading, error } = authHookFunction();

  // ✅ local state (form ke liye)
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ✅ form submit
  async function registerForm(e) {
    e.preventDefault();

    // 🔥 hook function call
    await register(username, email, password, confirmPassword);

    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <main>
      <h1>Register Account</h1>

      {error && <p>{error}</p>}

      <form onSubmit={registerForm}>
        <input
          type="text"
          required
          placeholder="Enter Name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="email"
          required
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          required
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          required
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* 🔥 loading handle */}
        <button type="submit">
          {loading ? "Loading..." : "Register"}
        </button>
      </form>

      <p>
        If You Have Already Account?{" "}
        <Link className="link" to="/login">
          Login
        </Link>
      </p>
    </main>
  );
}

export default Register;