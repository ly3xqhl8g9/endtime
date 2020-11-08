// #region imports
    // #region external
    import {
        ENDTIME_UNIX_START,
        ENDTIME_VOLUME,
    } from '../../data/constants';
    // #endregion external
// #endregion imports



// #region module
class Endtime {
    public static now() {
        const endtime = new this();

        return endtime.unixToEndtime(
            Math.floor(Date.now() / 1000)
        );
    }

    /**
     * UNIX time (seconds) to endtime.
     *
     * @param value
     */
    public unixToEndtime(
        value: number,
    ) {
        if (typeof BigInt === 'undefined') {
            return 0;
        }

        const unixDifference = value - ENDTIME_UNIX_START;
        const endtimeDifference = BigInt(ENDTIME_VOLUME) - BigInt(unixDifference);

        return endtimeDifference;
    }

    /**
     * Endtime to UNIX time (seconds)
     *
     * @param value
     */
    public endtimeToUnix(
        value: bigint,
    ) {
        if (typeof BigInt === 'undefined') {
            return 0;
        }

        const difference = BigInt(ENDTIME_VOLUME) - value;
        const unixTime = ENDTIME_UNIX_START + Number(difference);

        return unixTime;
    }

    public dateToEndtime(
        date: Date,
    ) {
        return 0;
    }

    public endtimeToDate(
        value: number,
    ) {
        return 0;
    }
}
// #endregion module



// #region exports
export default Endtime;
// #endregion exports
