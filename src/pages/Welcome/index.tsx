import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Welcome: FC = () => {


    return (
        <>
            <h3>Welcome to</h3>
            <h1>CinemAda</h1>
            <Link to='/login'>Login</Link>
            <Link to='/sign-up'>SignUp</Link>
        </>
    )
};

export { Welcome }
