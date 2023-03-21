import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setPhotosData } from "../../features/albumSlice";
import "./DetailsPage.css";

export default function DetailsPage() {
  const { albumID } = useParams();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(9);
  const photosData = useSelector((state) => state.albums.photosData);
  const albumData = useSelector((state) => state.albums.albumsData);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = photosData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const numberOfPages = Math.ceil(photosData.length / recordsPerPage);
  console.log(currentRecords, numberOfPages, "sdsldf");
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
      <h1>
        {photosData.map((item) => {
          return <img src={item.thumbnailUrl} alt="thumb" />;
        })}
      </h1>
    </div>
  );
}
