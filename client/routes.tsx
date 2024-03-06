import React from 'react';

const NodeView = React.lazy(() => import('./pages/NodeView/NodeView'));
const ListView = React.lazy(() => import('./pages/ListViewPage/ListViewPage'));
const Graph = React.lazy(() => import('./components/Graph/Graph'));

const routes = [
  { path: '/*', name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Graph },
  { path: '/node-view', name: 'Node View', element: NodeView },
  { path: '/list-view', name: 'List View', element: ListView },
];

export default routes;
