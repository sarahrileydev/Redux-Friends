import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_START });

  axios
    .get("http://localhost:5000")
    .then(res =>
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_FAIL,
        payload: "Error!"
      })
    );
};
