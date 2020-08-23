import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pushUsers } from "../../Redux/UploadRedux/uploadAction";

export default function Upload() {
  const dispatch = useDispatch();
  const [data] = useState({ title: "foo", body: "bar", userId: 1 });
  useEffect(() => {
    dispatch(pushUsers(data));
  }, []);
  const users = useSelector((state) => state.upload);
  console.log(users);
  return users.loading === true ? (
    <h2>loading</h2>
  ) : users.error ? (
    <h2>{users.error}</h2>
  ) : (
    <div>
      <h2>users</h2>
      <div>{users.data.title}</div>
    </div>
  );
}
