import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContexts";

const UserData = () => {
  const { setUser } = useContext(UserContext);

  const userdata = async () => {
    const user = await axios
      .get("/user", {
        withCredentials: true,
      })
      .catch(() => {
        localStorage.removeItem("isauth");
      });
    const data = await user.data.user;
    return data;
  };

  useEffect(() => {
    if (localStorage.getItem("isauth")) {
      userdata().then((data) => {
        if (data) {
          setUser(data);
        }
      });
    }
  }, []);
};

export default UserData;
