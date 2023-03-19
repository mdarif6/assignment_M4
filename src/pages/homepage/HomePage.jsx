import "./HomePage.css";
import { useEffect, useState } from "react";
import AlbumsList from "../../components/AlbumsList";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import { albumSetData } from "../../features/albumSlice";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();
  const albumData = useSelector((state) => state.albums.albumsData);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const albumURL = "https://jsonplaceholder.typicode.com/albums/";
  function getAlbumsData() {
    fetch(albumURL)
      .then((response) => response.json())
      .then((data) => dispatch(albumSetData(data)));
  }
  useEffect(() => {
    getAlbumsData();
  }, []);

  const getButtonForPagination = (pages, noOfHits) => {
    let arrayOfPages = [];
    let noOfPages = pages / noOfHits;
    for (let i = 1; i <= noOfPages; i++) {
      arrayOfPages.push(i);
    }
    return arrayOfPages;
  };

  let newArryOfPages = getButtonForPagination(100, 20);

  const currentRecords = albumData.slice(indexOfFirstRecord, indexOfLastRecord);
  const numberOfPages = Math.ceil(albumData.length / recordsPerPage);
  console.log(currentRecords, numberOfPages);
  return (
    <div className="alb-homepage-wrapper">
      <h2>LIST OF ALBUMS</h2>
      <div className="alb-albumlist-wrapper">
        {albumData &&
          currentRecords.map((item) => {
            return <AlbumsList item={item} />;
          })}
      </div>

      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
