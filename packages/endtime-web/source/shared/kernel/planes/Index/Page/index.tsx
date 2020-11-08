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



const getCount = async () => {
    try {
        const response = await fetch('/count?kind=json');
        const data = await response.json();

        return data.now;
    } catch (error) {
        return '';
    }
}


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
    ] = useState(Endtime.supported()
        ? Endtime.now().toLocaleString()
        : 0
    );
    // #endregion state


    // #region effects
    useEffect(() => {
        const interval = setInterval(async () => {
            if (Endtime.supported()) {
                setEndtime(Endtime.now().toLocaleString());
            } else {
                const value = await getCount();
                setEndtime(value);
            }
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
