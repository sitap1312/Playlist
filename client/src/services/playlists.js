import api from "./apiConfig";


export const createPlaylist = async (input) => {
  try {
    const res = await api.post("/playlist", input)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getAllPlaylist = async () => {
  try {
    const res = await api.get("/playlist")
    return res.data
  } catch (e) {
    throw e
  }
}

export const getPlaylist = async (id) => {
  try {
    const res = await api.get(`/playlist/${id}`);
    return res.data
  } catch (e) {
    throw e;
  }
}


export const deletePlaylist = async (id) => {
  try {
    const res = await api.delete(`/playlist/${id}`);
    return res
  } catch (e) {
    throw e;
  }
};

export const updatePlaylist = async (id, input) => {
  try {
    const res = await api.put(`/playlist/${id}`, input);
    return res.data;
  } catch (e) {
    throw e;
  }
}

