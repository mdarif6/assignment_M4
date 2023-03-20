import "./AlbumsList.css";
export default function AlbumsList({ item }) {
  return (
    <div>
      <div className="alb-card-wrapper">
        <p className="alb-card-title">ALBUM TITLE : {item.title}</p>
        <p className="alb-card-username">id:{item.id} </p>
        <p className="alb-card-username">albumID:{item.albumId} </p>
      </div>
    </div>
  );
}
