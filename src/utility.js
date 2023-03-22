export const getNumberOfPages = (totalItems, itemsPerPage) => {
  return Math.ceil(totalItems / itemsPerPage);
};

export const getPageData = (data, pageNumber, itemsPerPage) => {
  const lastIndex = pageNumber * itemsPerPage - 1;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  return data.slice(startIndex, lastIndex + 1);
};

export const getPagesArray = (noOfPages) => {
  const pages = [];
  for (let i = 1; i <= noOfPages; i++) {
    pages.push(i);
  }
  return pages;
};
