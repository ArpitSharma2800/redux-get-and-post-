import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../Redux/Home/homeAction";

function Home() {
  const users = useSelector((state) => state.home);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return users.loading === true ? (
    <h2>loading</h2>
  ) : users.error ? (
    <h2>{users.error}</h2>
  ) : (
    <div>
      <h2>users</h2>
      <div>
        {users === null
          ? null
          : users &&
            users.users &&
            users.users.map((user) => <p>{user.title}</p>)}
      </div>
    </div>
  );
}

export default Home;
