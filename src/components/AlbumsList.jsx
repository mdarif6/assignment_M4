import "./AlbumsList.css";
export default function AlbumsList({ item }) {
  return (
    <div>
      <div className="alb-card-wrapper">
        <p className="alb-card-title">{item.title}</p>
        <p className="alb-card-username">userID:{item.id} </p>
      </div>
    </div>
  );
}
