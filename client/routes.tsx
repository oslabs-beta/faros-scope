import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const NodeView = React.lazy(() => import("./pages/NodeView/NodeView"));
const ListView = React.lazy(() => import("./pages/ListViewPage/ListViewPage"));
const NetworkView = React.lazy(() => import("./components/Graph/Graph"));

// example
//   { path: '/theme', name: 'Theme', element: Colors, exact: true },

const routes = [
  // { path: "/*", /*exact: true ,*/ name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/node-view", name: "Node View", element: NodeView },
  { path: "/list-view", name: "List View", element: ListView },
  { path: "/network-view", name: "Network View", element: NetworkView },
];

export default routes;
