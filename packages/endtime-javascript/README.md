<p align="center">
    <img src="https://raw.githubusercontent.com/ly3xqhl8g9/endtime/master/about/identity/endtime-logo-night.png" height="250px">
    <br />
    <br />
    <a target="_blank" href="https://github.com/ly3xqhl8g9/endtime/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-DEL-blue.svg?colorB=000000&style=for-the-badge" alt="License: DEL">
    </a>
</p>



<h1 align="center">
    endtime
</h1>


<h3 align="center">
    Time as a Countdown to the End of Biological Life on Earth
</h3>



### Contents

+ [Considerations](#considerations)
+ [Implementations](#implementations)
+ [Install](#install)
+ [Usage](#usage)



## Considerations

In machinetime we use the [Unix time](https://en.wikipedia.org/wiki/Unix_time).

In many other time systems we arbitrarily consider a `point 0` and start counting from there. However, zooming to the solar system scale, we observe that time is not a mere forward passage into an endless continuity, but it is in fact a countdown.

The [end times](https://en.wikipedia.org/wiki/End_time), which almost all religions reflected upon in a non-data fundamented manner, will come actually with the [future transformations](https://en.wikipedia.org/wiki/Future_of_Earth) of the Sun and of the Earth.

Shortly put: the Sun will probably engulf the Earth somewhere after the next 7 billion years. However, the Earth, Terra, will certainly become uninhabitable in about 1 billion years. Therefore, the `endtime` is a measurement of 1 billion years starting from 10 October 2020 (arbitrarily picked point for it's mathematical appeal, 00:00 10 10 2020), that means that on 00:00 10 October 2020 the `endtime` will be 3,15581497635456 * 10^16, or extended 31,558,149,763,545,600, or verbalized, about 31,6 quadrillion seconds until the `endtime`. The next timeplace after this will be 31,558,149,763,545,599 and so on, further closing to `endtime 0`, 1 billion years from 10 October 2020.

An `endtime` Earth year is considered as a [sidereal year](https://en.wikipedia.org/wiki/Sidereal_year) of `365.256363004` [days](https://en.wikipedia.org/wiki/Ephemeris_day), or `365 days, 6 hours, 9 minutes, 9.76 seconds`.

There are, of course, even more, further along endtimes, such as the endtime of the Galaxy, or even of the Universe, however, for now, it is best to think of what is in the 'near' future, the next 1 billion years.



## Implementations

`endtime` is implemented for:

+ [`JavaScript/TypeScript`](https://github.com/ly3xqhl8g9/endtime/tree/master/packages/endtime-javascript)



## Install

In order to install the `endtime` package run

``` bash
npm install endtime
```

or

``` bash
yarn add endtime
```



## Usage

``` typescript
import {
    Endtime,
} from 'endtime';


// `now` is a `bigint`
const now = Endtime.now();
```
