// #region imports
    // #region external
    import Endtime from '../';
    // #endregion external
// #endregion imports



// #region module
describe('Endtime', () => {
    it('simple', () => {
        const now = Endtime.now();
        console.log(now);

        expect(true).toBeTruthy();
    });
});
// #endregion module
