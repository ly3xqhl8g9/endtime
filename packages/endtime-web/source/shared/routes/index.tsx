// #region imports
    // #region libraries
    import React from 'react';

    import {
        PluridReactRoute,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import IndexPagePlane from '~kernel-planes/Index/Page';
    import AboutPlane from '~kernel-planes/About';
    import NotFoundPlane from '~kernel-planes/NotFound';

    import Head from '~kernel-components/Head';
    // #endregion external
// #endregion imports



// #region module
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
// #endregion module



// #region exports
export default routes;
// #endregion exports
