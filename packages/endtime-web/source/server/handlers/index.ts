// #region imports
    // #region libraries
    // import cors from 'cors';

    import PluridServer from '@plurid/plurid-react-server';
    // #endregion libraries


    // #region internal
    import handleCount from './count';
    // #endregion internal
// #endregion imports



// #region module
export const setRouteHandlers = (
    server: PluridServer,
) => {
    const instance = server.instance();

    instance.get('/count', handleCount);
}


export const setPttpCors = (
    server: PluridServer,
) => {
    if (!server.usePTTP) {
        return;
    }

    // const instance = server.instance();

    // const corsOptions = {
    //     credentials: true,
    //     origin: (_: any, callback: any) => {
    //         return callback(null, true);
    //     },
    // };
    // const PTTP_ROUTE = '/pttp';

    // instance.options(PTTP_ROUTE, cors(corsOptions) as any);
    // instance.use(
    //     cors(corsOptions),
    // );
}
// #endregion module
