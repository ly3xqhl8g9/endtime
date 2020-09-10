import React, {
    useRef,
} from 'react';

import {
    HelmetProvider,
} from 'react-helmet-async';

import {
    Provider as ReduxProvider,
} from 'react-redux';

import {
    ApolloProvider,
} from '@apollo/client';

import {
    PluridProvider,
    PluridRouterBrowser,
} from '@plurid/plurid-react';

import helmetContext from '#kernel-services/helmet';

import reduxStore from '#kernel-services/state/store';

import graphqlClient from '#kernel-services/graphql/client';

import {
    routes,
    shell,
} from '../shared';



const reduxState = (window as any).__PRELOADED_REDUX_STATE__;
delete (window as any).__PRELOADED_REDUX_STATE__;

const pluridMetastate = (window as any).__PRELOADED_PLURID_METASTATE__;
delete (window as any).__PRELOADED_PLURID_METASTATE__;


const Client: React.FC<any> = () => {
    /** references */
    const store = useRef(reduxStore(reduxState));


    /** render */
    return (
        <HelmetProvider context={helmetContext}>
            <ReduxProvider store={store.current}>
                <ApolloProvider client={graphqlClient}>
                    <PluridProvider metastate={pluridMetastate}>
                        <PluridRouterBrowser
                            shell={shell}
                            routes={routes}
                        />
                    </PluridProvider>
                </ApolloProvider>
            </ReduxProvider>
        </HelmetProvider>
    );
}


export default Client;
