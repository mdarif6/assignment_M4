import "./PhotoList.css";

export default function PhotoList({ item }) {
  return (
    <div className="alb-photo-wrapper">
      <img src={item.thumbnailUrl} alt="" />
    </div>
  );
}
