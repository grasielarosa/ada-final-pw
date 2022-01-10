/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { Toast, ToastBody } from 'reactstrap';

const Loading: FC = () => {
  const [loading, setLoading] = useState();
  return (
    <div className="p-3 my-2 rounded col-sm-12 mx-auto w-25 align-self-center">
      <Toast fade className="mx-auto bg-primary">
        <ToastBody className="text-center">
          <SyncLoader color="#FFFACD" loading={loading} size={10} />
        </ToastBody>
      </Toast>
    </div>
  );
};

export { Loading };
