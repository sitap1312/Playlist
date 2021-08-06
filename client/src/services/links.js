import api from "./apiConfig";
//Create Link
export const createLink = async (input) => {
  try {
    const res = await api.post("/link", input)
    return res.data
  } catch (error) {
    throw error
  }
};
// Getting Link
export const getLink = async (id) => {
  try {
    const res = await api.get(`/link/${id}`);
    return res.data
  } catch (e) {
    throw e;
  }
};
// Deleting Link
export const deleteLink = async (id) => {
  try {
    const res = await api.delete(`/link/${id}`);
    return res
  } catch (e) {
    throw e;
  }
};
// Updating Link
export const updateLink = async (id) => {
  try {
    const res = await api.put(`/link/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};