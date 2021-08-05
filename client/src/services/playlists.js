// <<<<<<< test
// import api from "./apiConfig";


export const createPlaylist = async (input) => {
  try {
    const res = await api.post("/playlist", input)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
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


// export const deletePlaylist = async (id) => {
//   try {
//     const res = await api.delete(`/playlist/${id}`);
//     return res
//   } catch (e) {
//     throw e;
//   }
// };
// export const updatePlaylist = async (id) => {
//   try {
//     const res = await api.put(`/playlist/${id}`);
//     return res.data;
//   } catch (e) {
//     throw e;
//   }
// }
// =======
// import React from 'react'

// export default function playlists() {
//   return (
//     <div>
      
//     </div>
//   )
// }
// >>>>>>> userSita
