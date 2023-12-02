
import React from 'react';
import { useSelector } from 'react-redux';
import { nodeOptionSelector } from '../../redux/metricsApi';

const  NodesList =( ) => {

    const nodes = useSelector(nodeOptionSelector) ?? []; 
    console.log(nodes); 


    return (
        <div>

        </div>
    )
}

export default NodesList