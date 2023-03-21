import "./HomePage.css";
import { useEffect, useState } from "react";
import AlbumsList from "../../components/AlbumsList";

import Pagination from "../../components/Pagination";
import { albumSetData, setUsersData } from "../../features/albumSlice";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();
  const albumData = useSelector((state) => state.albums.albumsData);
  const usersData = useSelector((state) => state.albums.usersData);
  const photosData = useSelector((state) => state.albums.photosData);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  console.log(albumData, "100", usersData, "user", photosData, "photo");

  const thirdData = usersData.filter((elem) => {
    return albumData.some((ele) => {
      if (ele.id === elem.id) {
        return elem;
      }
    });
  });
  console.log(thirdData, "third");
  const third = thirdData.map((third) => {
    console.log(third.name);
  });
  console.log(third);

  const albumURL1 = "https://jsonplaceholder.typicode.com/albums/";
  function getAlbumsData() {
    fetch(albumURL1)
      .then((response) => response.json())
      .then((data) => dispatch(albumSetData(data)));
  }

  const albumURL2 = "http://jsonplaceholder.typicode.com/users";
  // const albumURL3 = "https://jsonplaceholder.typicode.com/albums/1/photos";
  function getUsersData() {
    fetch(albumURL2)
      .then((response) => response.json())
      .then((data) => dispatch(setUsersData(data)));
  }

  // function getPhotosData() {
  //   fetch(albumURL3)
  //     .then((response) => response.json())
  //     .then((data) => dispatch(setPhotosData(data)));
  // }

  useEffect(() => {
    getAlbumsData();
    getUsersData();
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

  // const segregatedAlbumData = albumData.reduce((dict, data) => {
  //   if (!dict[data.userId]) dict[data.userId] = [];
  //   dict[data.userId].push(data);
  //   return dict;
  // }, []);

  // console.log(segregatedAlbumData);

  // segregatedAlbumData.map((item) => {
  //   return item.map((ele) => {
  //     console.log(ele);
  //   });
  // });

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
