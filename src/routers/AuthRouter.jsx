import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { Login } from '../components/Auth/Login';
import { Register } from '../components/Auth/Register';
import { Logout } from '../components/Auth/Logout';
import { PageNotFound } from '../components/PageNotFound';

export const AuthRouter = () => {
  return (

    // rutas anidadas o rutas hijas
    <Routes>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='Logout' element={<Logout/>} />
        <Route path='*' element={<PageNotFound/>} />
    </Routes>
  )
}
