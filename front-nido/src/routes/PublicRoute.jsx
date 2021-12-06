import { Route, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import SessionContext from '../context/sessionContext';
export default function PrivateRoute() {
    const { user } = useContext(SessionContext);
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