import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Pagination from "../../components/Pagination";
import PhotoList from "../../components/PhotoList";
import { setPhotosData } from "../../features/albumSlice";
import "./DetailsPage.css";

export default function DetailsPage() {
  const { albumID } = useParams();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(9);
  const photosData = useSelector((state) => state.albums.photosData);
  const albumData = useSelector((state) => state.albums.albumsData);
  const usersData = useSelector((state) => state.albums.usersData);

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
  console.log(albumData, "album", photosData, "photo", usersData, "userrrrrr");
  useEffect(() => {
    getPhotosData();
  }, []);

  const albumid = albumData.map((item) => item);
  console.log(albumid, "kkkkkkkkkk");
  const userObject = usersData.find((user) => user.id === albumid.Id);
  console.log(userObject, "lllllllllllllll");
  return (
    <div>
      <h2>TITLE OF ALBUM</h2>
      <p>Uploaded By : {usersData.name}</p>
      <div className="alb-photo-wrapper">
        {currentRecords.map((item) => {
          return <PhotoList item={item} />;
        })}
      </div>

      <div>
        <Pagination
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
