import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const NodeView = React.lazy(() => import("./pages/NodeView/NodeView"));
const ListView = React.lazy(() => import("./pages/ListViewPage/ListViewPage"));
const Graph = React.lazy(() => import("./components/Graph/Graph"));
// const NetworkView = React.lazy(() => import("./components/Graph/Graph"));

// example
//   { path: '/theme', name: 'Theme', element: Colors, exact: true },

const routes = [
  { path: "/*", /*exact: true ,*/ name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Graph },
  { path: "/node-view", name: "Node View", element: NodeView },
  { path: "/list-view", name: "List View", element: ListView },
//   { path: "/network-view", name: "Network View", element: Graph },
];

export default routes;
