import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGQxYWZkMDEyMTY4Mzc2MDhlNzVkOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDI2NjAwOSwiZXhwIjoxNjUwNjk4MDA5fQ.PElNgc0Saj3SiQtrNp4EuM9o4jhsszjCkTpXfA2xB2Y",
          },
        });
        setNewUsers(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, [newUsers]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers?.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user?.profilePic ||
                "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user?.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
