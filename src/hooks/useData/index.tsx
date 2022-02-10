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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  const handlePageClick = (paginate: any) => {
    // eslint-disable-next-line prefer-const
    let currentPage = paginate.selected + 1;
    setPage(currentPage);
  };
  // eslint-disable-next-line consistent-return
  const isOnMyApi = (id: number) => {
    const isOnDB = dataIds?.find((items) => items === id);
    if (isOnDB) {
      return true;
    }
  };

  useEffect(() => {
    getDataFB().then((response) => {
      setDataIds(response.map((item) => item.id));
    });
  }, [dataIds]);

  const handleButtonData = (movie: Data) => {
    if (!dataIds?.includes(movie.id)) {
      postDataMedia(movie);
      getDataFB().then((response) => {
        setDataIds(response.map((item) => item.id));
      });
    }
    if (dataIds?.includes(movie.id)) {
      deleteDataMedia(movie);
      getDataFB().then((response) => {
        setDataIds(response.map((item) => item.id));
      });
    }
  };

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
