import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>User not logged in!</div>;
  return (
    <div>
      Profile:
      <p>UserName:- {user?.userName}</p>
      <p>Password:- {user?.password}</p>
    </div>
  );
}

export default Profile;
