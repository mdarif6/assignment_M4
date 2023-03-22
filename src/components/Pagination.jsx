import "./Pagination.css";
import Button from "./Button";
import { getPagesArray } from "../utility";

export default function Pagination({
  numberOfPages,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = getPagesArray(numberOfPages);

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
      <button
        className={currentPage === 1 ? "disabled-btn" : "primary-btn"}
        onClick={prevPage}
      >
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
      <button
        className={
          currentPage === numberOfPages ? "disabled-btn" : "primary-btn"
        }
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
}
