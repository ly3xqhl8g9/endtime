import PluridServer from '@plurid/plurid-react-server';

import handleCount from './count';



export const setRouteHandlers = (
    server: PluridServer,
) => {
    const handler = server.handle();
    const instance = server.instance();

    // mock-up API request handler
    handler.post('/api/v1/status', (request, response, next) => {
        response.setHeader('Content-Type', 'application/json');
        response.end(
            JSON.stringify(
                { status: true },
            ),
        );
    });

    instance.get('/count', handleCount);
}
