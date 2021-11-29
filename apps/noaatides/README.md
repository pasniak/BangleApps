# NOAA Tides app (Beta!)

BangleJS application which displays tide forecast for a location in USA. The forecast range covers approximately 31 days.

## Usage

NOAA's prediction locations are indexed by ID which can be found using:
https://tidesandcurrents.noaa.gov/tide_predictions.html

### Automatic upload (do this the first time)

To automatically upload start Chrome with:

`chromium-browser --disable-web-security --enable-experimental-web-platform-features --enable-web-bluetooth-new-permissions-backend --user-data-dir=/tmp/chromeUserDataDir https://pasniak.github.io/BangleApps/#outdoors`

This is needed due to CORS (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) web security feature in Chrome which blocks querying NOAA web service (https://api.tidesandcurrents.noaa.gov/api/prod/).


### Manual upload with regular Chrome

To manually upload prediction data: on the Tide Prediction page select range [To:] field (just change month to the next) and click on [Web Services] and then on [JSON] button to download a file.

Save raw data from this file to a file and upload this file as *noaatides.json* to your watch.
