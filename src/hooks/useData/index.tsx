import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getDataMovies } from '../../api/tmdb';
import { Data } from '../../types';

const useData = () => {
  const params = useLocation().search;
  const page = Number(new URLSearchParams(params).get('page')) || 1;
  const [search, setSearch] = useState('');
  // const search = new URLSearchParams(params).get('search') || undefined;

  const [data, setData] = useState<Data[]>();

  useEffect(() => {
    getDataMovies(page, search).then((response) => {
      setData(response.results);
    });
  }, [page, search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  return { handleChange, page, search, data };
};

export { useData };
