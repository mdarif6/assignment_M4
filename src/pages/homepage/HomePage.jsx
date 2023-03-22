import "./HomePage.css";
import { useEffect, useState } from "react";
import AlbumsList from "../../components/AlbumsList";

import Pagination from "../../components/Pagination";
import { albumSetData, setUsersData } from "../../features/albumSlice";
import { useDispatch, useSelector } from "react-redux";
import { getNumberOfPages, getPageData } from "../../utility";

export default function HomePage() {
  const dispatch = useDispatch();
  const albumData = useSelector((state) => state.albums.albumsData);

  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = getNumberOfPages(albumData.length, 5);
  const currentRecords = getPageData(albumData, currentPage, 5);

  const albumURL1 = "https://jsonplaceholder.typicode.com/albums/";
  function getAlbumsData() {
    fetch(albumURL1)
      .then((response) => response.json())
      .then((data) => dispatch(albumSetData(data)));
  }

  const albumURL2 = "http://jsonplaceholder.typicode.com/users";
  function getUsersData() {
    fetch(albumURL2)
      .then((response) => response.json())
      .then((data) => dispatch(setUsersData(data)));
  }

  useEffect(() => {
    getAlbumsData();
    getUsersData();
  }, []);

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
