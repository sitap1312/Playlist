import { useState } from "react";
import { Link } from "react-router-dom";
import { signIn } from "../../services/users"
import Layout from "../../components/Layout/Layout";
import { useHistory } from "react-router-dom";

export default function SignIn(props) {
  const [input, setInput] = useState({ email: "", password: "" });
  const { setUser } = props;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await signIn(input)
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
          
          <div className="login-title">SIGN IN</div>
          <form onSubmit={handleSubmit}>

            <br />
            <input
              className="login-input"
              id="email"
              type="email"
              value={input.email}
              onChange={handleInput}
              placeholder="info@emailaddress.com"/>
            <br />

            <br />
            <input
              className="login-input"
              id="password"
              type="password"
              value={input.password}
              onChange={handleInput}
              placeholder="••••••••••••" />
            <br />
            <br />

            <div>
              <button className="signup-btn" type="submit">SIGN IN</button>
            </div>

            <br />

            <div className="login-text">Do not have an Account? <a className="login-link" href="/sign-up">Sign Up</a></div>
          
          </form>
        </div>
    </section>
    </Layout>
  );
}