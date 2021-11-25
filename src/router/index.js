import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import BookList from '@/views/BookList.vue';
import Item from '@/views/Item.vue';
import BookDetail from '@/components/BookDetail.vue';
import NotFound from '@/components/NotFound.vue';
import User from '@/views/User.vue';
import UserProfile from '@/components/UserProfile.vue';
import UserPost from '@/components/UserPost.vue';

/**
 * Vueのプラグインインストール
 * new Vue()を呼び出す前にやらないとダメ
 */
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/book',
    name: 'BookList',
    component: BookList,
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: BookDetail,
    props: (route) => ({
      // Stringで返ってくる可能性があるのでキャスト
      id: Number(route.params.id),
      title: route.params.title,
      content: route.params.content,
    }),
  },
  {
    path: '/item/:id',
    name: 'item',
    component: Item,
  },
  // ネストするパスはnameを書かない
  {
    path: '/user',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile,
      },
      {
        path: 'post',
        component: UserPost,
      },
    ],
  },
  {
    // 上のpath群にマッチしないもの全て対象
    path: '*',
    // redirect: '/',
    name: 'notFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
