import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setPhotosData } from "../../features/albumSlice";
import "./DetailsPage.css";

export default function DetailsPage() {
  const { albumID } = useParams();
  console.log(albumID, "albID");
  const dispatch = useDispatch();
  const photosData = useSelector((state) => state.albums.photosData);
  const albumData = useSelector((state) => state.albums.albumsData);

  const albumURL3 = `https://jsonplaceholder.typicode.com/albums/${albumID}/photos`;
  function getPhotosData() {
    fetch(albumURL3)
      .then((response) => response.json())
      .then((data) => dispatch(setPhotosData(data)));
  }
  console.log(albumData, "album", photosData, "photo");
  useEffect(() => {
    getPhotosData();
  }, []);

  return (
    <div>
      <h1>arif</h1>
    </div>
  );
}
