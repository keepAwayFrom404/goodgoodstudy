import Home from './components/par16/home';
import User from './components/par16/user';
export const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/user/:id',
    component: User
  }
];
