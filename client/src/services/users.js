import api from "./apiConfig";
import jwtDecode from "jwt-decode";

//User SignUp
export const signUp = async (credentials) => {
  try {
    const res = await api.post("/sign-up", credentials)
    localStorage.setItem("token", res.data.token);
    let user = jwtDecode(res.data.token);
    return user;
  } catch (e) {
    throw e
  };
};

//User SignIn
export const signIn = async (credentials) => {
  try {
    const res = await api.post("/sign-in", credentials)
    localStorage.setItem("token", res.data.token);
    let user = jwtDecode(res.data.token);
    return user;
  } catch (e) {
    throw e
  };
};

export const verify = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const res = await api.get("/verify")
    // console.log(res.data)
    return res.data
  }
  else {
    return false;
  };
};

export const signOut = () => {
  try {
    localStorage.removeItem("token")
    return true;
  } catch (e) {
    throw e
  }
}

// getUser
export const getUser = async (req,res) => {
  try {
      const user = await User.findById(req.params.id).populate("playlist")
      if(user) {
          return res.status(200).json(user)
      } else {
          return res.status(404).send("User Not Found")
      }
  } catch(err) {
      return res.status(500).json({error: err.message})
  }
}

// updating the user info
export const updateUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { body } = req;
    const updatedUser = await User.findByIdAndUpdate(user_id, body, { new: true })
    res.send(updatedUser)
  } catch (e) {
    res.status(422).json({ error: e.message });
  }
};