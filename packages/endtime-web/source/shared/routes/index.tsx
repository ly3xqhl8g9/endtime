import React from 'react';

import {
    PluridReactRoute,
} from '@plurid/plurid-react';

import IndexPagePlane from '../kernel/planes/Index/Page';
import AboutPlane from '../kernel/planes/About';
import NotFoundPlane from '../kernel/planes/NotFound';

import Head from '../kernel/components/Head';



const indexRoute: PluridReactRoute = {
    value: '/',
    exterior: Head,
    planes: [
        {
            value: '/plane',
            component: IndexPagePlane,
        },
        {
            value: '/about',
            component: AboutPlane,
        },
    ],
    view: [
        '/plane',
    ],
    defaultConfiguration: {
        elements: {
            plane: {
                controls: {
                    show: false,
                },
                width: 0.7,
            },
        },
    },
};



const notFoundRoute: PluridReactRoute = {
    value: '/not-found',
    exterior: () => (
        <Head
            title="not found · endtime"
        />
    ),
    spaces: [
        {
            value: 'default',
            universes: [
                {
                    value: 'default',
                    clusters: [
                        {
                            value: 'default',
                            planes: [
                                {
                                    value: '/',
                                    component: NotFoundPlane,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};


const routes: PluridReactRoute[] = [
    indexRoute,
    notFoundRoute,
];


export default routes;
