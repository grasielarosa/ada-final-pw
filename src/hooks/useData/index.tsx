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

  // eslint-disable-next-line consistent-return
  const isOnMyApi = (id: number) => {
    const res = dataIds?.find((items) => items === id);
    if (res) {
      return true;
    }
  };

  const handleButtonData = async (movie: Data) => {
    // eslint-disable-next-line no-unused-expressions
    dataIds?.includes(movie.id)
      ? await deleteDataMedia(movie)
      : await postDataMedia(movie);
    getDataFB().then((response) => {
      setDataIds(response.map((item) => item.id));
    });
  };

  useEffect(() => {
    getDataTMDB(page, search).then((response) => {
      setDataTMDB(response.results);
      setTotalPages(response.total_pages);
    });
  }, [page, search]);

  useEffect(() => {
    getDataFB().then((response) => {
      setDataIds(response.map((item) => item.id));
    });
  }, []);

  return {
    handleButtonData,
    handleChange,
    handlePageClick,
    dataTMDB,
    isOnMyApi,
    page,
    totalPages,
    setPage,
  };
};

export { useData };
