import React, { useEffect, useState } from 'react';
import { deleteDataMedia, getDataFB, postDataMedia } from '../../api/myApi';
import { getDataTMDB } from '../../api/tmdb';
import { Data } from '../../types';

const useData = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState('');
  const [dataTMDB, setDataTMDB] = useState<Data[]>();
  const [dataIds, setDataIds] = useState<(number | undefined)[]>();
  const [totalPages, setTotalPages] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  const handlePageClick = (paginate: any) => {
    // eslint-disable-next-line prefer-const
    let currentPage = paginate.selected + 1;
    setPage(currentPage);
  };

  const isOnMyApi = (id: number): number | undefined => {
    return dataIds?.find((items) => items === id);
  };

  const handleButtonData = async (movie: Data) => {
    // eslint-disable-next-line no-unused-expressions
    dataIds?.includes(movie.id)
      ? await deleteDataMedia(movie)
      : await postDataMedia(movie);
    getDataFB().then((response) => {
      setDataTMDB(response);
    });
  };

  useEffect(() => {
    getDataTMDB(page, search).then((response) => {
      setDataTMDB(response.results);
    });
  }, [page, search]);

  useEffect(() => {
    getDataTMDB(page, search).then((response) => {
      setTotalPages(response.total_pages);
    });
  }, [page, search]);

  useEffect(() => {
    getDataFB().then((response) => {
      setDataIds(response.map((item) => item.id));
    });
  }, [dataTMDB]);

  return {
    handleButtonData,
    handleChange,
    handlePageClick,
    dataTMDB,
    dataIds,
    isOnMyApi,
    page,
    totalPages,
    setPage,
  };
};

export { useData };
