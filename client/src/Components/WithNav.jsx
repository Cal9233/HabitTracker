import React from 'react';
import AppHeader from './AppHeader';
import { Outlet } from 'react-router-dom';

const WithNav = () => {
  return (
    <>
        <AppHeader />
        <Outlet />
    </>
  )
}

export default WithNav