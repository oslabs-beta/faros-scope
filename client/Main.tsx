import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import DropPositions from './components/reusable/reactdnd/DropPositions';
import NavBar from './components/NavBar';
import { useGetTotalNodesQuery, useGetTotalPodsQuery, useGetTotalContainersQuery } from './redux/metricsApi'
import { rawListeners } from 'process';
import formatNodes from './util/formatNodes'

// This is the main component that is rendered by the client.
const Main = () => {
  // Query for nodes, returns node objects, no pod data
  const { data, status, error } = useGetTotalNodesQuery({
    pollingInterval: '3000',
  })
  if(data){
    const nodeData = [];
    for(const elm of data.data.result){
      nodeData.push(elm);
    }
    console.log('node info', nodeData)
    formatNodes(nodeData);
  }
  // Query for pods, returns pod objs, node data is a string name
  const { data : podData, status : statusData, error : errorData } = useGetTotalPodsQuery({
    pollingInterval: '3000',
  })

  if(podData){
    console.log('pod info', podData?.data.result)
  }

  // Query for pods, returns pod objs, node data is a string name
  const { data : containerData, status : containerStatus, error : containerError } = useGetTotalContainersQuery({
      pollingInterval: '3000',
    })
  
    if(containerData){
      console.log('container info', containerData?.data.result)
    }

  // const cache: any = {}
  // if(data){
  //   for(const elm of data.data.result){
  //     let node = elm.metric.node
  //     if(!cache[node]){
  //       cache[node] = [elm.metric.pod]
  //     } else {
  //       cache[node].push(elm.metric.pod)
  //     }
      
     
      // if(!cache.node)
      //   cache.node = 0;
      // console.log(elm.metric.node)

    // }
// console.log(cache)
//       // data.data.result.map((el)=> {
//       //   el.metric
//       // })
//   }


  // Outlet is a special component that is used to render nested routes, default is the index route, which is the home page.
  const [parent, setParent] = useState('topNavPosition');
  const [orientation, setOrientation] = useState('horizontal');
  function handleDragEnd({ over, active }: any) {
    console.log('The droppable element ', over);
    switch (over?.id) {
      case 'topNavPosition':
        setOrientation('horizontal');
        break;
      case 'leftNavPosition':
        setOrientation('vertical');
        break;
      case 'bottomNavPosition':
        setOrientation('horizontal');
        break;
      case 'rightNavPosition':
        setOrientation('vertical');
        break;
      default:
        break;
    }
    setParent(over ? over.id : parent);
    console.log('The draggable element ', active)
  }
  return (
    <div className="Main">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
        <DragOverlay>
          <NavBar orientation={orientation} />
        </DragOverlay>
        <DropPositions parent={parent} />
      </DndContext>
      <Outlet />
    </div>
  );
};

export default Main;
