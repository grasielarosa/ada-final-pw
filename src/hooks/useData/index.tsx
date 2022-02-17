/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteDataMedia, getDataFB, postDataMedia } from '../../api/myApi';
import { getDataTMDB } from '../../api/tmdb';
import { Data } from '../../types';

const useData = () => {
  const params = new URLSearchParams(window.location.search);
  const search = params.get('search') || '';
  const page = Number(params.get('page')) || 1;

  const [dataTMDB, setDataTMDB] = useState<Data[]>();
  const [dataIds, setDataIds] = useState<(number | undefined)[]>();
  const [totalPages, setTotalPages] = useState<number>(1);

  const { push } = useHistory();

  const setPageParam = (newPage: number) => {
    params.set('page', newPage.toString());
    push(`${window.location.pathname}?${params.toString()}`);
  };

  const setSearchParam = (searchInput: string) => {
    params.set('search', searchInput);
    setPageParam(1);
    push(`${window.location.pathname}?${params.toString()}`);
  };

  const handlePageClick = (paginate: any) => {
    // eslint-disable-next-line prefer-const
    let currentPage = paginate.selected + 1;
    setPageParam(currentPage);
    window.scroll(0, 0);
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
    handlePageClick,
    dataTMDB,
    isOnMyApi,
    page,
    totalPages,
    setPageParam,
    setSearchParam,
  };
};

export { useData };
