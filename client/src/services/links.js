import api from "./apiConfig";

const createLink = (input) => {
  try {
    const res = await api.post("/link", input)
    return res.data
  } catch (e) {
    throw e
  }
}
