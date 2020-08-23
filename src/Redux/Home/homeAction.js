import axios from "axios";
export const fetchUserRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    var config = {
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
      headers: {
        Cookie: "__cfduid=de2d2a7a19dc78f26d01dd486c606eaf41596982886",
      },
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch(function (error) {
        // console.log(error);
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
