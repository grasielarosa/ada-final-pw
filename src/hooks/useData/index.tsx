import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { deleteDataMedia, getDataMedia, postDataMedia } from '../../api/myApi';
import { getDataMovies } from '../../api/tmdb';
import { Data } from '../../types';

const useData = () => {
  // const params = useLocation().search;
  const [page, setPage] = useState<number>(1);
  // const page = Number(new URLSearchParams(params).get('page')) || 1;
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Data[]>();
  const [dataIds, setDataIds] = useState<(number | undefined)[]>();
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    getDataMovies(page, search).then((response) => {
      setData(response.results);
    });
  }, [page, search]);

  useEffect(() => {
    getDataMovies(page, search).then((response) => {
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
    getDataMedia().then((response) => {
      setDataIds(response.map((item) => item.id));
    });
  }, []);

  const handleButton = (movie: Data) => {
    if (!dataIds?.includes(movie.id)) {
      postDataMedia(movie);
      getDataMedia().then((response) => {
        setDataIds(response.map((item) => item.id));
      });
    }
    if (dataIds?.includes(movie.id)) {
      deleteDataMedia(movie);
      getDataMedia().then((response) => {
        setDataIds(response.map((item) => item.id));
      });
    }
  };

  return {
    handleButton,
    handleChange,
    handlePageClick,
    data,
    dataIds,
    isOnMyApi,
    page,
    totalPages,
    setPage,
  };
};

export { useData };
