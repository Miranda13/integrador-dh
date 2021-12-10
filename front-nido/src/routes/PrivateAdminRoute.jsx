import { Navigate, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import SessionContext from '../context/sessionContext';
import jwtDecode from 'jwt-decode'
export default function PrivateAdminRoute() {
    var decoded = JSON.parse(localStorage.getItem('user')).myToken || "";
    if (decoded !== "") {
        decoded = jwtDecode(decoded)
    }
    return (
        <>
            {
                JSON.parse(localStorage.getItem("user")) ?
                    decoded?.roles === "ROLE_ADMIN" ?
                        <Outlet />
                        :
                        <Navigate to="/" />
                    :
                    <Navigate to="/login" />
            }
        </>
    )
}