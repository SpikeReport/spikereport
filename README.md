# SpikeReport

SpikeReport is a software that is currently under development, which has the goal to allow drink spiking victims to speak out anonymously. Using anonymously gathered anecdotal evidence, SpikeReport tries to collect as much data as possible to determine the extent of this problem, giving
research and law enforcement alike a collection of data that can be
used to determine the extent of this problem.


## Development stages of SpikeReport

The development on SpikeReport has just started. As SpikeReport aims to allow global anonymous reporting of drink spiking incidents, considerations towards modularizing translations have to be made.

Current goals of SpikeReport development are:
1. Create a secure front-end which contains a survey to allow anonymous
individuals who got spiked, or suspect they got spiked, to report the incident. 
2. Create a secure backend to store the collected data
3. Create a secure front-end for law enforcement or research, which
visualizes the amount of incidents in a specific area and the frequency
of drink spiking incidents in a given area. 
4. Create a resource-pool on drink spiking which will allow users to anonymously inform themselves on the issue, and how to protect themselves.

## Considerations

SpikeReport aims to be a global, centralized and anonymous platform for
reporting incidents of drink spiking. Therefor, it is necessary to localize the application in as many languages as possible.
To acquire data on locations where drink spiking occurs, SpikeReport
is considering to use Google Places/Maps API as well as the Yelp API. 

For the front-end, currently Vue.js is heavily considered. 