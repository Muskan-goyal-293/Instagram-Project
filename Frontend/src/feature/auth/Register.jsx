import { Link } from "react-router-dom";
import "../style/register.scss";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function registerForm(e) {
    e.preventDefault();

  if(password !== confirmPassword){
    console.log("not match");
    return
  }


    axios
      .post(
        "http://localhost:3000/api/register",
        { username, email, password, confirmPassword },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
 
         
      setPassword ("");
      setEmail("");
      setUserName("");
      setConfirmPassword("");
    }

  return (
    <>
      <main>
        <h1>Register Account</h1>
        <form onSubmit={(e) => {registerForm(e)}}>
          <input
            type="text"
            required
            placeholder="Enter Name"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="email"
            required
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button type="submit">
            Register
          </button>
        </form>
        <p>
          If You Have Already Account ?{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
      </main>
    </>
  );
}
export default Register;
