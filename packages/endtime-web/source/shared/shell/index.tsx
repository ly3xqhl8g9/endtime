import React from 'react';

import {
    PluridReactComponent,
} from '@plurid/plurid-react';

import {
    GlobalStyle,
} from './styled';



interface ShellProperties {
}


const Shell: React.FC<ShellProperties> = (
    properties,
) => {
    /** properties */
    const {
        children,
    } = properties;


    /** render */
    return (
        <>
            <GlobalStyle />

            {children}
        </>
    );
}


const shell: PluridReactComponent = Shell;


export default shell;
