import React, {
    useRef,
    useState,
    useEffect,
} from 'react';

import {
    Endtime,
} from 'endtime';

import {
    StyledPage,
    StyledHeaderH1,
    StyledHeaderH2,
    StyledAbout,
} from './styled';



const Page: React.FC<any> = (
    properties,
) => {
    /** properties */
    // const {
    //     plurid,
    // } = properties;

    // #region references
    const interval = useRef<null | number>(null);
    // #endregion references


    // #region state
    const [
        endtime,
        setEndtime,
    ] = useState(Endtime.now().toLocaleString());
    // #endregion state


    // #region effects
    useEffect(() => {
        interval.current = setInterval(() => {
            setEndtime(Endtime.now().toLocaleString());
        }, 1000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        }
    }, []);
    // #endregion effects


    /** render */
    return (
        <StyledPage>
            <StyledHeaderH2>
                endtime in
            </StyledHeaderH2>

            <StyledHeaderH1>
                {endtime}
            </StyledHeaderH1>

            <StyledHeaderH2>
                seconds
            </StyledHeaderH2>

            <StyledAbout>
                about
            </StyledAbout>
        </StyledPage>
    );
}


export default Page;
