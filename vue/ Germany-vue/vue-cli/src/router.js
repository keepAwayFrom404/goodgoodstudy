import Home from './components/vue-router/home';
import Header from './components/vue-router/header';
const User = resolve => {
  require.ensure(
    ['./components/vue-router/user'],
    () => {
      resolve(require('./components/vue-router/user'));
    },
    'user'
  );
};
const UserList = resolve => {
  require.ensure(
    ['./components/vue-router/user-list'],
    () => {
      resolve(require('./components/vue-router/user-list'));
    },
    'user'
  );
};
const UserDetail = resolve => {
  require.ensure(
    ['./components/vue-router/user-detail'],
    () => {
      resolve(require('./components/vue-router/user-detail'));
    },
    'user'
  );
};
const UserEdit = resolve => {
  require.ensure(
    ['./components/vue-router/user-edit'],
    () => {
      resolve(require('./components/vue-router/user-edit'));
    },
    'user'
  );
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
