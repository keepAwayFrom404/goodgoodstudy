import Home from './components/par16/home';
import Header from './components/par16/header';
const User = resolve => {
  requestAnimationFrame.ensure(['./components/par16/user'], () => {
    resolve(require('./components/par16/user'));
  });
};
export const routes = [
  {
    path: '',
    name: 'home',
    components: {
      default: Home,
      'header-top': Header
    }
  },
  {
    path: '/user',
    components: {
      default: User,
      'header-bottom': Header
    },
    children: [
      {
        path: '',
        component: UserList
      },
      {
        path: ':id',
        component: UserDetail,
        name: 'userDetail',
        beforeEnter: (to, from, next) => {
          console.log('inside routes setup');
          next();
        }
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
];
