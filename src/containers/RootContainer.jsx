import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PAGE_ROUTERS from '../constants/RouterConstants';

const App = () => (
  <Router>
    <div className="container">
        <Header/>
        <div className="wrapper">
          <Sidebar/>
          <Content/>
        </div>
    </div>
  </Router>
);

const Header = ()=>(
  <div className="header">
    <div className="header__logo">
      AnT
    </div>
  </div>
);

const Sidebar = ()=>(
  <div className="sidebar">
    <div className="sidebar__profile">
      Profile
      <SidebarRouteLink/>
    </div>

  </div>
);

const Content = ()=>(
  <div className="content">
    <ContentRouters/>
  </div>
);

// sidebar links
const SidebarRouteLink = () =>(
  <ul>
    {PAGE_ROUTERS.map((route, i) => <SidebarRouteLinkItem key={i} {...route} />)}
  </ul>
);

const SidebarRouteLinkItem = route => (
  <li>
    <Link to={route.path}>{route.title}</Link>
  </li>
);


//content router
const ContentRouters = () =>(
  <Switch>
    {PAGE_ROUTERS.map((route, i) => <ContentRoutersItem key={i} {...route} />)}
  </Switch>
);

const ContentRoutersItem = route => (
  <Route
    {...route}
    path={route.path}
    exact={route.exact}
    component={route.component}
  />
);

export default App;
