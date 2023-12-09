import {io} from 'socket.io-client'; 

let socket;

export const initializeSocket = () => {
    socket = io('http://104.154.129.231:8000/', {
        reconnection: true,
        transports: ['websocket', 'polling']
    });

    socket.on('connect', () => {
        console.log('Connected to server');
    });

    socket.on('message', (message) => {
        // ^ Update Redux store 
        console.log('Message received: ', message);
    })

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });

    socket.on('podAdded', (data) => {
        console.log('Pod Added: ', data)
    })
    socket.on('podModified', (data) => {
        console.log('Pod Modified: ', data)
    })
    socket.on('podDeleted', (data) => {
        console.log('Pod Deleted: ', data)
    })

    socket.on('error', (err) => {
        console.log(err);
    });
}

export const disconnectSocket = () => {
    if (socket) {
        socket.disconnect(); 
    }
}