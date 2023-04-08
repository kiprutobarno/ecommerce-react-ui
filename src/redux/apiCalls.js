import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await fetch("http://localhost:8000/api/v1/auth/login", {
      method: "POST",
      headers: {
        mode: "no-cors",
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    });

    const { data } = await res.json();
    console.log(data);

    dispatch(loginSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
  }
};
