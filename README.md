# SpikeReport

<b>SpikeReport is currently under heavy development and not fit for produciton use, as it is in it's "pre-alpha" stage!</b>

## Mission statement

SpikeReport aims to be an online platform where victims, or people who suspect they were the victims, of "drink spiking" can report the offence online. By gathering such reports, we hope to acquire a set of data which could then be used by research or law enforcement to gain insights on the problem of drink spiking, the areas in which it is commited most frequently, and so on. 
Most "drink spiking" offenses are not reported to local law enforcement (we strongly encourage victims of "drink spiking" to seek out the help of law enforcement), which makes it difficult to comprehend the scope of this problem.
We also aim to give victims of "drink spiking" a way to speak out without having to fear repercussion or "victim blaming". 

## Technical stuff

Currently we are developing the front-end, using Vue.js and Google Maps. The back-end side of things has not been considered yet.
There will be some sort of database involved, although it is uncertain at this time which database should be used. 

SpikeReport is aiming to create two tools: 
1. The anonymous report form which is available to the public and can be used to report offences in regards to "drink spiking".
2. A map, which for now will not be available to the public, which visualizes incidents of drink spiking (neither do we want to give criminals an idea where to commit their crimes, nor do we want to harm businesses). 

Alongside, we are trying to create a repository of information in various languages on the problem of "drink spiking" and how an individual can protect themselves from such attacks.

## Considerations

Current considerations on the front-end side of things are:
1. How to deal with bots (captcha)?
2. How to ensure anonymity even when using Google Maps?
3. How to enable localization in a way that we do not end with 200+ different web pages?
4. How to improve the web survey to get valueable information on the issue?

## Dependencies

"dependencies": {
    "bootstrap-vue": "^2.0.0-rc.11",
    "vue": "^2.5.21",
    "vue-router": "^3.0.1",
    "vue2-google-maps": "^0.10.5",
    "vuex": "^3.0.1"
    
## What needs to be done?

One of the most important things right now is to get the Google Maps to work properly. When entering a location, it should automatically jump to said location and create a marker.
The other important thing to do is to get localization right, so anybody around the world can use the platform.
Implementing a captcha is also very important to fend off bots.
The UI could use some work, there are two image files which show how we imagine the UI for now. 
Security tests are also welcome.
