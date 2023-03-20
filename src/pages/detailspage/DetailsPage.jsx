import { useSelector } from "react-redux";

import "./DetailsPage.css";
export default function DetailsPage() {
  const albumData = useSelector((state) => state.albums.albumsData);

  return (
    <div>
      <h1>arif</h1>
    </div>
  );
}
