GlobalNet
==========================

A Node.js IP to Geocode lookup API

Use it here:  geocode-ip.herokuapp.com

Or clone the repository at git@github.com:magee/geocodeIP.git

Usage:
------------------------

To find all available geocode data for the IP address provided:

http://geocode-ip.herokuapp.com/location/111-222-333-444

Where 111-222-333-444 is an IP4 address.  Note dashes are substituted for dots in the request.

Returns an object containing all geocode data for the IP address provided.

To find just one data element (lat and long currently available):

http://geocode-ip.herokuapp.com/location/111-222-333-444/lat
http://geocode-ip.herokuapp.com/location/111-222-333-444/long

Returns a string which is the numeric latitude or longitude value.  Note: you will not see these in the browser.  They are returned to the calling function.

Install:
------------------------

Open Terminal (on Mac) or the equivalent shell on your system.
Navigate to the folder where you'd like the geocode-ip source code to be copied.
Enter the following commands
[code]
git clone git@github.com:magee/geocodeIP.git && cd geocodeIP
npm install
[/code]

Geodata:
------------------------

Open source IP Data and code library provided by IP2Location http://www.ip2location.com/
