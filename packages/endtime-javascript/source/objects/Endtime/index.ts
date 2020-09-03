// #region module
class Endtime {
    public static now() {
        const endtime = new this();
        return endtime.unixToEndtime(Date.now());
    }

    public unixToEndtime(
        value: number,
    ) {
        return value;
    }

    public endtimeToUnix(
        value: number,
    ) {
        return value;
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
