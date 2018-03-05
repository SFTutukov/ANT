import Index  from '../components/Index';
import Test   from '../components/Test';

const PAGE_ROUTERS = [
  {
    path: "/",
    title: "Home",
    exact: true,
    component: Index
  },
  {
    path: "/test/",
    title: "Test",
    component: Test
  }
];

export default PAGE_ROUTERS;
