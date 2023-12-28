import React, { useContext } from "react";
import UserContext from "../contextapi/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return <div>welcome {user.name}</div>;
}

export default Profile;
