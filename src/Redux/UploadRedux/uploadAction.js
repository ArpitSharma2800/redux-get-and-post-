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

export const pushUsers = (data) => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    const config = {
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      headers: {
        "Content-Type": "application/json",
        Cookie: "__cfduid=d84856f24d7bed8fcefed4f7f2c2057e51597843626",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch(function (error) {
        console.log(error);
        dispatch(fetchUserFailure(error));
      });
  };
};
