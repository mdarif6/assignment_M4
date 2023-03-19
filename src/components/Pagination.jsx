import "./Pagination.css";
import Button from "./Button";

export default function Pagination({
  numberOfPages,
  currentPage,
  setCurrentPage,
}) {
  //this array will hold all page number from 1 to n
  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="alb-buttons-wrapper">
      <button className="primary-btn" onClick={prevPage}>
        previous
      </button>
      {pageNumbers.map((item) => {
        return (
          <Button
            clickHandle={() => setCurrentPage(item)}
            item={item}
            currentPage={currentPage}
          />
        );
      })}
      <button className="primary-btn" onClick={nextPage}>
        Next
      </button>
    </div>
  );
}
