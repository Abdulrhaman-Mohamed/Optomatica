import React from 'react'
import { useRoutes } from 'react-router-dom';
import Books from '../pages/Books';
import NotFound from '../pages/NotFound';

export default function Router() {
    
    let element = useRoutes([
        {
            element: <Books />,
            path: '/',
        },
        {
            element: <NotFound />,
            path: '*',
            id: 'not-found',

        }
            
        
    ]);
    return element;
}
