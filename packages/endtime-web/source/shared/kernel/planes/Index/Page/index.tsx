import React from 'react';

import {
    StyledPage,
    StyledHeaderH1,
    StyledHeaderH2,
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
                31,558,149,763,545,599 seconds
            </StyledHeaderH1>
        </StyledPage>
    );
}


export default Page;
