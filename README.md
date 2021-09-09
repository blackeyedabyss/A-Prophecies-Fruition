# A Prophecies Fruition

Using "A Prophecies Fruition", I'm going to be exploring space planets beyond our solar system, and finding those planets that are most likely to be habitable. That means, the planets that humans could one day live on or potentially planets that might already support alien life and we're going to be doing all this in node, using the data captured by the Kepler Telescope. The story starts with the Kepler Space Telescope, this was a state-of-the-art telescope launched into space in 2009; for nearly 10 years it looked out into space and gathered data about planets beyond our Solar System. Kepler observed hundreds of thousands of stars, and in doing so, helped us discover over 4000 planets, and the best part is: NASA shared all the data that Kepler gathered as an open source project, in the Exoplanet Archive. They called it Exoplanet, as, well, exoplanets are just planets that live outside our Solar system, they orbit other stars, other than our sun and we're going to download the table of data gathered specifically.

By the Kepler space telescope which we can find under this link for KOI Table, where KOI is the list of Kepler's Objects of Interest. The list of Things that Kepler observed that might be Stars, containing planets, that could potentially be habitable for humans.

I downloaded the table of data in what's called a CSV format, and I'm going to set up a CSV parser, to read it with Node.js.

Demo here: https://youtu.be/MDMIwJNfR5Q

One of the biggest indicator, whether if the planet is habitable or not, is the Seff marker: the amount of times the light is reaching the planet, when compared to Earth. Hence, I'm going to use the Stellar Flux, in the dataset, it is titled as Insolation Flux [Earth Flux] column (koi_insol) to see, whether if the planet is habitable or not.

The full list can be seen here: http://phl.upr.edu/projects/habitable-exoplanets-catalog in the Optimistic Sample of Potentially Habitable Exoplanets. 

Tech stack includes: Node.js, CSV-PARSER, Stream API, Data from NASA Exoplanet Archive.

This project was created on top of Node v14.17.5.

To run the project on your machine, simply clone this repo / download the files on your local machine, and run the command:
## `node index.js`
