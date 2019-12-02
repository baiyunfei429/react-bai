import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Sider from './component/Sider';
import Index from "./Pages/Index";
import ReactBai from "./Pages/ReactBai";
import NodeBai from "./Pages/NodeBai";

function AppRouter() {
  let routeConfig = [
    { path: "/", title: "首页", exact: true, component: Index },
    { path: "/react/", title: "react", exact: false, component: ReactBai },
    {
      path: "/node/",
      title: "node",
      exact: false,
      component: NodeBai
    },
  ];
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>博客</h3>
          <ul>
            {routeConfig.map((item, index) => {
              return (
                <li key={index}>
                  {" "}
                  <Link to={item.path}>{item.title}</Link>{" "}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rightMain">
          {routeConfig.map((item, index) => {
            return (
              <Route
                key={index}
                exact={item.exact}
                path={item.path}
                component={item.component}
              />
            );
          })}
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
