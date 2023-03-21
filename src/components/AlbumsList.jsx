import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./AlbumsList.css";

export default function AlbumsList({ item }) {
  const usersData = useSelector((state) => state.albums.usersData);

  const userObject = usersData.find((user) => user.id === item.userId);

  return (
    <div>
      <div className="alb-card-wrapper">
        <p className="alb-card-title">ALBUM TITLE : {item.title}</p>
        <p className="alb-card-username">USER:{userObject.name} </p>
        <Link to={`/details/${item.id}`}>
          <button>Click</button>
        </Link>
      </div>
    </div>
  );
}
