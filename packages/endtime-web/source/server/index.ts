import PluridServer, {
    PluridServerMiddleware,
    PluridServerService,
    PluridServerServicesData,
    PluridServerPartialOptions,
    PluridServerTemplateConfiguration,
} from '@plurid/plurid-react-server';

import helmet from '#kernel-services/helmet';

/** uncomment to use services */
import reduxStore from '#kernel-services/state/store';
import apolloClient from '#kernel-services/graphql/client';

import {
    routes,
    shell,
} from '../shared';

import preserves from './preserves';

import {
    setRouteHandlers,
} from './handlers';



/** ENVIRONMENT */
const watchMode = process.env.PLURID_WATCH_MODE === 'true';
const isProduction = process.env.ENV_MODE === 'production';
const buildDirectory = process.env.PLURID_BUILD_DIRECTORY || 'build';
const port = process.env.PORT || 63000;



/** CONSTANTS */
const applicationRoot = 'plurid-app';
const openAtStart = watchMode
    ? false
    : isProduction
        ? false
        : true;
const debug = isProduction
    ? 'info'
    : 'error';



/** Custom styles to be loaded into the template. */
const styles: string[] = [
    //
];


/** Express-like middleware. */
const middleware: PluridServerMiddleware[] = [
    //
];


/** Services to be used in the application. */
const services: PluridServerService[] = [
    /** uncomment to use services */
    // [START apollo service]
    'Apollo',
    // [END apollo service]
    // [START redux service]
    'Redux',
    // [END redux service]
    // [START stripe service]
    // 'Stripe',
    // [END stripe service]
];


const servicesData: PluridServerServicesData = {
    /** uncomment to use services */
    apolloClient,
    reduxStore,
    reduxStoreValue: {},
};

const options: PluridServerPartialOptions = {
    buildDirectory,
    open: openAtStart,
    debug,
    serverName: 'Endtime Server',
};

const template: PluridServerTemplateConfiguration = {
    root: applicationRoot,
};



/** SERVER */
// generate server
const pluridServer = new PluridServer({
    helmet,
    routes,
    preserves,
    shell,
    styles,
    middleware,
    services,
    servicesData,
    options,
    template,
});


// handle non-GET or custom routes (such as API requests, or anything else)
setRouteHandlers(pluridServer);



/**
 * If the file is called directly, as in `node build/index.js`,
 * it will run the server.
 *
 * The check is in place so that the server can also be imported
 * for programmatic usage.
 */
if (require.main === module) {
    pluridServer.start(port);
}


export default pluridServer;
