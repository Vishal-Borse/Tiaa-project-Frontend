import * as api from "../api";
import { setCurrentUser } from "./currentUser.js";

export const conSignup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.conSignup(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/consumer/home");
  } catch (error) {
    console.log(error);
  }
};

export const conLogin = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.conLogin(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/consumer/home");
  } catch (error) {
    console.log(error);
  }
};

export const orgSignup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.orgSignup(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/organiser/home");
  } catch (error) {
    console.log(error);
  }
};

export const orgLogin = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.orgLogin(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/organiser/home");
  } catch (error) {
    console.log(error);
  }
};
