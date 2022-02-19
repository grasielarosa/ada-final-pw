import React, { FC } from 'react';
import { CardGroup, Pagination, SearchForm, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { useData } from '../../hooks/useData';

const AdminPage: FC = () => {
  const { dataTMDB, handlePageClick, totalPages, setSearchParam } = useData();

  return (
    <Wrapper hideFooter>
      <SearchForm handleChange={setSearchParam} />
      <CardGroup items={dataTMDB} />
      <Pagination pageCount={totalPages} handlePageClick={handlePageClick} />
    </Wrapper>
  );
};

export const Admin = withAuth(AdminPage);
