import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { Login } from '../components/Auth/Login';

export const AuthRouter = () => {
  return (
    <Routes>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
    </Routes>
  )
}
