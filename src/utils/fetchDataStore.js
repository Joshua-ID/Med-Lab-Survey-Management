import axios from "axios";

const API_URL_RANDOM = import.meta.env.VITE_API_URL_RANDOM;

export async function fetchStaffRandom(limit = 10) {
  try {
    const response = await axios.get(`${API_URL_RANDOM}?results=${limit}`);
    console.log("random--success", response);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching staff data:", error);
    throw error;
  }
}

const API_URL_DUMMY = import.meta.env.VITE_API_URL_DUMMY;

export async function fetchStaffDummy(limit = 10) {
  try {
    const response = await axios.get(`${API_URL_DUMMY}?limit=${limit}`);
    console.log("dummy-success", response);
    return response.data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
