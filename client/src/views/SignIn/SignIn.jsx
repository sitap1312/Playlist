import { useState } from "react";
import "./SignIn.css"
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
          <h2>Welcome Back!</h2>
          <form onSubmit={handleSubmit}>

            <br />
            <input
              id="email"
              type="email"
              value={input.email}
              onChange={handleInput}
              className="inputfield"
              placeholder="info@emailaddress.com"/>
            <br />

            <br />
            <input
              id="password"
              type="password"
              value={input.password}
              onChange={handleInput}
              className="inputfield"
              placeholder="••••••••••••" />
            <br />
            <br />

            <div>
              <button className="signup-btn" type="submit">LOGIN IN</button>
            </div>
          </form>
        </div>
    </section>
    </Layout>
  );
}