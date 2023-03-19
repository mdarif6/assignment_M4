import "./Pagination.css";
export default function Button({ item, clickHandle, currentPage }) {
  return (
    <div>
      <button
        className={currentPage === item ? "active-btn" : "primary-btn"}
        onClick={clickHandle}
      >
        {item}
      </button>
    </div>
  );
}
