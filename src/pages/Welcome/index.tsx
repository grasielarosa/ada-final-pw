import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

const Welcome: FC = () => {
    const { push } = useHistory();

    const handleLogin = () => {
        push('/login');
    }

    const handleSignup = () => {
        push('/sign-up');

    }

    return (
        <>
            <h3>Welcome to</h3>
            <h1>CinemAda</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>SignUp</button>

        </>
    )
};

export { Welcome }
