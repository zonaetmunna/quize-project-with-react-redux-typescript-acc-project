import React from 'react';
import { store } from '../redux/store';

const Home = React.lazy(() => import('../views/Pages/Home/Home'));
const Login = React.lazy(() => import('../views/Pages/Login/Login'));
const SingleProducts = React.lazy(() => import('../views/Pages/SingleProducts/SingleProduct'));
const Dashboard = React.lazy(() => import('../views/Pages/dashboards/AdminDashboard'))
const AdminDashboard = React.lazy(() => import('../views/Pages/dashboards/AdminDashboard'))
const marchentDashBoard = React.lazy(() => import('../views/Pages/dashboards/marchentDashboard'))
const Secret = React.lazy(() => import('../views/Pages/admin/Secret'))

const { auth: { data: { role } } } = store.getStore();

const getRoleBasedDashboard = (role: string) => {
     switch (role) {
          case 'admin':
               return AdminDashboard;
               break;
          case 'marchent':
               return marchentDashBoard;
               break;
          default:
               break;
     }
}


const routes = [
     {
          path: '/',
          name: 'home',
          element: Home,
          role: ['*']

     },
     {
          path: '/product/:id',
          name: 'singleProduct',
          element: SingleProducts,
          role: ['*']

     },
     {
          path: '/login',
          name: 'login',
          element: Login,
          role: ['*']
     },
     {
          path: '/dashboard',
          name: 'dashboard',
          element: getRoleBasedDashboard(role),
          role: ['amin', 'merchant']
     },
     {
          path: '/admin',
          name: 'only for admin',
          element: Secret,
          role: ['admin']

     }
];
export default routes;