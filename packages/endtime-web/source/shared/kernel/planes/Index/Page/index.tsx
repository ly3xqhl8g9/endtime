import React, {
    useState,
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


    /** render */
    return (
        <StyledPage>
            <StyledHeaderH2>
                endtime in
            </StyledHeaderH2>

            <StyledHeaderH1>
                31,558,149,763,545,599
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
