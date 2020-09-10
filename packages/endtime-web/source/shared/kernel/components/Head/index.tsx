import React from 'react';

import {
    Helmet,
} from 'react-helmet-async';



export interface HeadProperties {
    title?: string;
    description?: string;
    ogTitle?: string;
    ogImage?: string;
    ogURL?: string;
    ogDescription?: string;
    canonicalURL?: string;
}

const Head: React.FC<HeadProperties> = (
    properties,
) => {
    /** properties */
    const {
        title,
        description,
        ogTitle,
        ogImage,
        ogURL,
        ogDescription,
        canonicalURL,
    } = properties;

    const titleValue = title || `endtime`;
    const descriptionValue = description || 'Time as a Countdown to the End of Biological Life on Earth';
    const ogTitleValue = ogTitle || title || `endtime`;
    const ogDescriptionValue = ogDescription || description || 'Time as a Countdown to the End of Biological Life on Earth';
    const ogImageValue = ogImage || '/icon-192x192.png';
    const ogURLValue = ogURL || 'https://endtime.bio';


    /** render */
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="robots" content="index,follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <title>{titleValue}</title>
            <meta name="title" content={titleValue} />
            <meta name="description" content={descriptionValue} />

            <link rel="icon" href="/favicon.ico" sizes="64x64" />
            <link rel="shortcut icon" type="image/png" href="/icon-192x192.png" />
            <link rel="shortcut icon" sizes="192x192" href="/icon-192x192.png" />
            <meta name="theme-color" content="#272A30" />

            <link rel="manifest" href="/manifest.json" />

            {canonicalURL && (
                <link rel="canonical" href={canonicalURL} />
            )}

            {/* OPEN GRAPH */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ogTitleValue} />
            <meta property="og:image" content={ogImageValue} />
            <meta property="og:site_name" content="plurid" />
            <meta property="og:url" content={ogURLValue} />
            <meta property="og:description" content={ogDescriptionValue} />

            {/* TWITTER */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={ogURLValue} />
            <meta property="twitter:title" content={ogTitleValue} />
            <meta property="twitter:description" content={ogDescriptionValue} />
            <meta property="twitter:image" content={ogImageValue} />

            {/* SAFARI */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content={titleValue} />
            <link rel="apple-touch-icon" href="/icon-192x192.png" />

            {/* MICROSOFT */}
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#456c77" />
            <meta name="msapplication-TileColor" content="#ffffff" />
        </Helmet>
    );
}


export default Head;
