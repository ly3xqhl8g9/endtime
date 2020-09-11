import React, {
    useState,
    useEffect,
} from 'react';

import {
    Endtime,
} from 'endtime';

import {
    PluridLink,
} from '@plurid/plurid-react';

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


    // #region state
    const [
        endtime,
        setEndtime,
    ] = useState(Endtime.now().toLocaleString());
    // #endregion state


    // #region effects
    useEffect(() => {
        const interval = setInterval(() => {
            setEndtime(Endtime.now().toLocaleString());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);
    // #endregion effects


    /** render */
    return (
        <StyledPage>
            <div
                style={{
                    textAlign: 'center',
                }}
            >
                <img
                    src="https://raw.githubusercontent.com/ly3xqhl8g9/endtime/master/about/identity/endtime-logo-night.png"
                    height="250px"
                />
            </div>

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
                <PluridLink
                    route="/about"
                >
                    about
                </PluridLink>
            </StyledAbout>
        </StyledPage>
    );
}


export default Page;
