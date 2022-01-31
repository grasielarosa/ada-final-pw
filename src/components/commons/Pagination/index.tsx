import React, { useState } from 'react';
import {
  Pagination as PaginationComponent,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import { useData } from '../../../hooks/useData';

const Pagination = () => {
  const { handlePages, page, totalPages } = useData();

  // const [limit, setLimit] = useState(7);

  return (
    <div className="d-flex justify-content-center my-4">
      <PaginationComponent aria-label="Page navigation">
        <PaginationItem disabled>
          <PaginationLink onClick={() => handlePages(1)} first />
        </PaginationItem>
        <PaginationItem disabled>
          <PaginationLink onClick={() => handlePages(page - 1)} previous />
        </PaginationItem>
        {/* {items.} */}
        <PaginationItem active>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => handlePages(page + 1)} next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => handlePages(totalPages)} last />
        </PaginationItem>
      </PaginationComponent>
    </div>
  );
};

export { Pagination };
