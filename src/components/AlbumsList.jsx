import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setalbumItem } from "../features/albumSlice";
import "./AlbumsList.css";

export default function AlbumsList({ item }) {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.albums.usersData);

  const userObject = usersData.find((user) => user.id === item.userId);

  return (
    <div className="alb-card-wrapper">
      <div className="alb-card-title">
        <div className="alb-title-icon">
          <p>
            {" "}
            <strong> ALBUM TITLE : </strong>
            {item.title}
          </p>{" "}
          <Link to={`/details/${item.id}`}>
            <button onClick={() => dispatch(setalbumItem(item))}>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
        <p>
          <strong> USER:</strong> {userObject?.name}{" "}
        </p>
      </div>

      <div className="alb-view-btn-wrapper">
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
  );
}
