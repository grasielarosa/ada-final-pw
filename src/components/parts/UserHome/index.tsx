import React from 'react';
import 'bootstrap/js/dist/collapse';
import { RiArrowDownSLine } from 'react-icons/ri';
import { withAuth } from '../../../hoc';
import { useUsers } from '../../../hooks/useUsers';
import { CardGroup } from '../../commons';

const UserHome = () => {
  const { currentUser, dataUser, dataFB } = useUsers();
  const movies = dataUser?.filter((item) => item.media_type !== 'tv');
  const series = dataUser?.filter((item) => item.media_type === 'tv');

  return (
    <div className="justify-content-start">
      <div className="my-5">
        <h3 className="text-secondary">Hi, {currentUser?.firstname}</h3>
      </div>
      <div
        className="accordion accordion-flush text-secondary"
        id="accordionFlushExample"
      >
        <div className="accordion-item bg-transparent border-bottom border-secondary">
          <h2 className="accordion-header text-secondary" id="flush-headingOne">
            <button
              className="accordion-button collapsed bg-transparent text-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <RiArrowDownSLine /> movies that you watched
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#b4c515ordionFlushExample"
          >
            <div className="accordion-body">
              <CardGroup items={movies} />
            </div>
          </div>
        </div>
        <div className="accordion-item bg-transparent border-bottom border-secondary">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed bg-transparent text-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <RiArrowDownSLine /> series that you watched
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <CardGroup items={series} />
            </div>
          </div>
        </div>
        <div className="accordion-item bg-transparent border-bottom border-secondary">
          <h2
            className="accordion-header text-secondary"
            id="flush-headingThree"
          >
            <button
              className="accordion-button collapsed bg-transparent text-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <RiArrowDownSLine /> all media available
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#b4c515ordionFlushExample"
          >
            <div className="accordion-body">
              <CardGroup items={dataFB} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const User = withAuth(UserHome);
