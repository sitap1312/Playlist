import "./SignUp.css"
import { useState } from "react";
import { signUp } from "../../services/users"
import Layout from "../../components/Layout/Layout";
import { useHistory } from "react-router-dom";

export default function SignUp(props) {
  const [input, setInput] = useState({ username: "", email: "", password: "" });
  const { setUser } = props;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await signUp(input)
    console.log(user);
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
          <h2>SignUp</h2>
          <form onSubmit={handleSubmit}>

            <br />
            <input
              id="username"
              type="text"
              value={input.username}
              onChange={handleInput} placeholder="username" />
            <br />

            <br />
            <input
              id="email"
              type="email"
              value={input.email}
              onChange={handleInput} placeholder="info@emailaddress.com" />
            <br />

            <br />
            <input
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

            <p>Already have an accout? <a href="/sign-in">Log in</a></p>
            
          </form>
        </div>
      </section>
    </Layout>
  );
};
