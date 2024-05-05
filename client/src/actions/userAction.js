import axios from "axios";

export const registerUser = (user) => async (dispactch) => {
  dispactch({ type: "USER_REGISTER_REQUEST" });
  try {
    const response = await axios.post("/api/users/register", user);
    console.log(response);
    dispactch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispactch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispactch) => {
  dispactch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/users/login", user);
    dispactch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispactch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

export const logoutUser = () => (dispactch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};
