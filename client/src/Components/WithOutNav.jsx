import React from 'react';
import { Outlet } from 'react-router-dom';

const WithOutNav = () => {
  return (
    <>
        <Outlet/>
    </>
  )
}

export default WithOutNav