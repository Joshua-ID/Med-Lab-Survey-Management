import axios from "axios";

// const API_URL_random = "https://randomuser.me/api/";

// export async function fetchStaffRandom(limit = 10) {
//   try {
//     const response = await axios.get(`${API_URL_random}?results=${limit}`);
//     return response.data.results;
//   } catch (error) {
//     console.error("Error fetching staff data:", error);
//     throw error;
//   }
// }

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchStaff(limit = 10) {
  try {
    const response = await axios.get(`${API_URL}?limit=${limit}`);
    console.log("successfulData", response);
    return response.data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
