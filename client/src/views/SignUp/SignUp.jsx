import "./SignUp.css"
import { useState } from "react";
import { signUp } from "../../services/users"
import Layout from "../../components/Layout/Layout";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp(props) {
  const [input, setInput] = useState({ username: "", email: "", password: "" });
  const { setUser } = props;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await signUp(input)
    setUser(user);
    history.push("/");
  };
  
  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  return (
    <Layout>
      <section className="signup-page">
        <div className="signup-form">
          
          <Link to="/">
            <img className="login-logo" src="https://i.imgur.com/xidyTP5.png" alt="Logo" />
          </Link>
          
          <div className="login-title">SIGN UP</div>
          <form onSubmit={handleSubmit}>

            <br />
            <input
              className="login-input"
              id="username"
              type="text"
              value={input.username}
              onChange={handleInput} placeholder="username" />
            <br />

            <br />
            <input
              className="login-input"
              id="email"
              type="email"
              value={input.email}
              onChange={handleInput} placeholder="info@emailaddress.com" />
            <br />

            <br />
            <input
              className="login-input"
              id="password"
              type="password"
              value={input.password}
              onChange={handleInput} placeholder="••••••••••••" />
            <br />
            <br />

            <div>
              <button className="signup-btn" type="submit">SIGN UP</button>
            </div>

            <br />

            <div className="login-text">Already have an account? <a className="login-link" href="/sign-in">Sign in</a></div>
            
          </form>
        </div>
      </section>
    </Layout>
  );
};
