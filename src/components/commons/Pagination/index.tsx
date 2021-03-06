import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
  pageCount: number;
  handlePageClick: (page: any) => void;
};

const Pagination: FC<Props> = ({ pageCount, handlePageClick }): JSX.Element => {
  return (
    <div className=" my-4">
      <ReactPaginate
        previousLabel="<< first page"
        breakLabel="..."
        nextLabel="last page >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
      />
    </div>
  );
};

export { Pagination };
