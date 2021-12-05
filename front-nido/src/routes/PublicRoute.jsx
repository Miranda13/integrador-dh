import { Route, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import SessionContext from '../context/sessionContext';
export default function PrivateRoute() {
    // const { user } = useContext(SessionContext);
    const user = localStorage.getItem('user');
    return (
        <>
            {
                !user ?
                    <Outlet />
                    :
                    <Navigate to="/" />
            }
        </>
    )
}