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
        <p className="alb-card-title">ALBUM TITLE : {item.title}</p>
        <p className="alb-card-username">USER:{userObject.name} </p>
        <Link to={`/details/${item.id}`}>
          <button onClick={() => dispatch(setalbumItem(item))}>Click</button>
        </Link>
      </div>
    </div>
  );
}
