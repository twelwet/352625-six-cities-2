import axios from "axios";
import {ActionCreator} from "./reducer/user/user.js";

const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === 403 || err.response.status === 401 || err.response.status === 400) {
      dispatch(ActionCreator.requireAuthorization(true));
    }

    return Promise.reject(err);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default configureAPI;
