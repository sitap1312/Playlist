import api from './apiConfig'

export const createComment = async (input) => {
  try {
    const res = await api.post("/comment", input)
    return res.data
  } catch (e) {
    throw e
  }
}

export const getComment = async (id) => {
  try {
    const res = await api.get(`/comment/${id}`);
    return res.data
  } catch (e) {
    throw e
  }
}

export const deleteComment = async (id) => {
  try {
    const res = await api.delete(`/comment/${id}`)
    return res
  } catch (e) {
    throw e
  }
}

export const updateComment = async (id) => {
  try {
    const res = await api.put(`/comment/${id}`)
    return res.data
  } catch (e) {
    throw e
  }
}