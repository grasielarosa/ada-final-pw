import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { deleteDataMedia, getDataMedia, postDataMedia } from '../../api/myApi';
import { getDataMovies } from '../../api/tmdb';
import { Data } from '../../types';

const useData = () => {
  const params = useLocation().search;
  const page = Number(new URLSearchParams(params).get('page')) || 1;
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Data[]>();
  const [dataIds, setDataIds] = useState<(number | undefined)[]>();

  useEffect(() => {
    getDataMovies(page, search).then((response) => {
      setData(response.results);
    });
  }, [page, search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
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
      console.log('adicionou');
    }
    if (dataIds?.includes(movie.id)) {
      deleteDataMedia(movie);
      getDataMedia().then((response) => {
        setDataIds(response.map((item) => item.id));
      });
      console.log('apagou');
    }
  };

  return { handleButton, handleChange, page, search, data };
};

export { useData };
