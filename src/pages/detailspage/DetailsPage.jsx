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
  const albumitem = useSelector((state) => state.albums.albumitem);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = photosData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const numberOfPages = Math.ceil(photosData.length / recordsPerPage);

  const albumURL3 = `https://jsonplaceholder.typicode.com/albums/${albumID}/photos`;
  function getPhotosData() {
    fetch(albumURL3)
      .then((response) => response.json())
      .then((data) => dispatch(setPhotosData(data)));
  }

  useEffect(() => {
    getPhotosData();
  }, []);

  const userObject = usersData.find((user) => user.id === albumitem.userId);
  console.log(userObject, "delta");

  return (
    <div>
      <h2>TITLE OF ALBUM :{albumitem.title}</h2>
      <p>Uploaded By : {userObject.name}</p>

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
