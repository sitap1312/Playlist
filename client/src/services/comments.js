import api from './apiConfig';

// Getting All Comments
export const getAllComments = async () => {
  try {
    const res = await api.get("/comment")
    return res.data
  } catch (e) {
    throw e
  }
};

// Getting Single Comment
export const getComment = async (id) => {
  try {
    const res = await api.get(`/comment/${id}`);
    return res.data
  } catch (e) {
    throw e
  }
};

// Creating Comments
export const createComment = async (input) => {
  try {
    const res = await api.post("/comment", input)
    return res.data
  } catch (e) {
    throw e
  }
};

// Update A Comment
export const updateComment = async (id) => {
  try {
    const res = await api.put(`/comment/${id}`)
    return res.data
  } catch (e) {
    throw e
  }
};

// Delete A Comment
export const deleteComment = async (id) => {
  try {
    const res = await api.delete(`/comment/${id}`)
    return res
  } catch (e) {
    throw e
  }
};