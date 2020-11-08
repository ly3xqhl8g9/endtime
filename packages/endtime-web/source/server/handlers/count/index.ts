// #region imports
    // #region libraries
    import {
        Request,
        Response,
    } from 'express';

    import {
        Endtime,
    } from 'endtime';
    // #endregion libraries
// #endregion imports



// #region module
const handleCount = (
    request: Request,
    response: Response,
) => {
    try {
        const kind = request.query.kind;

        const now = Endtime.now();

        if (kind === 'json') {
            const data = {
                now: now.toLocaleString(),
            };

            response.json(data);
            return;
        }

        response.send(now.toLocaleString());
    } catch (error) {
        response.send('');
    }
}
// #endregion module



// #region exports
export default handleCount;
// #endregion exports
