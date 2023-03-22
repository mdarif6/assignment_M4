import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setalbumItem } from "../features/albumSlice";
import "./AlbumsList.css";

export default function AlbumsList({ item }) {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.albums.usersData);

  const userObject = usersData.find((user) => user.id === item.userId);
  console.log(userObject, "albm");

  return (
    <div>
      <div className="alb-card-wrapper">
        <div className="alb-card-title">
          <div className="alb-title-icon">
            <p>ALBUM TITLE : {item.title}</p>{" "}
            <Link to={`/details/${item.id}`}>
              <button onClick={() => dispatch(setalbumItem(item))}>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
          <p>USER: {userObject.name} </p>
        </div>

        <div>
          <Link to={`/details/${item.id}`}>
            <button
              className="alb-view-btn"
              onClick={() => dispatch(setalbumItem(item))}
            >
              VIEW MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
