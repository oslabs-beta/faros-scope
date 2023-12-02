
import React from 'react';
import { useSelector } from 'react-redux';
import { useNodesSelector } from '../../redux/metricsApi';
import {useAppSelector} from '../../redux/store';

const NodesList = () => {


    const Nodes = useNodesSelector((state) => state.queries?.getClusterInfo.data);
    console.log(Nodes); 

    return (
        <div>

        </div>
    )
}

export default NodesList