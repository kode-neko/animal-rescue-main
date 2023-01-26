import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Test } from '../pages';

const routeTest01 = {
  element: <Test name="Test 01"/>,
  path: '/test01',
};
const routeTest02 = {
  element: <Test name="Test 02"/>,
  path: '/test02',
};
const routeApp = {
  element: <App/>,
  path: '/',
  children: [routeTest01, routeTest02],
};
const router = createBrowserRouter([routeApp]);

export default router;
