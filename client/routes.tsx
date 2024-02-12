import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const NodeView = React.lazy(() => import("./pages/NodeView/NodeView"));
const ListView = React.lazy(() => import("./pages/ListViewPage/ListViewPage"));
const NetworkView = React.lazy(() => import("./components/Graph/Graph"));

// example
//   { path: '/theme', name: 'Theme', element: Colors, exact: true },

const routes = [
  { path: "/", exact: true , name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/node-view", name: "NodeView", element: NodeView },
  { path: "/list-view", name: "ListView", element: ListView },
  { path: "/network-view", name: "NetworkView", element: NetworkView },
];

export default routes;
