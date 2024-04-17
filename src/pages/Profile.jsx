import { useEffect, useState } from "react";
import axios from "axios";
import Favourites from "./Favourites";

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUser(JSON.parse(localStorage.getItem("userInfo")));
    }
    const baseUrl = "http://localhost:8000/api/v1";
    axios
      .get(`${baseUrl}/profile`, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      });
  }, []);
  return (
    <div className="flex gap-1 flex-col justify-center items-center">
      <h1 className="font-thin">{user.name}</h1>
      <img src={user.picture} alt="user" width={100} />
      <Favourites/>
    </div>
  );
};

export default Profile;
