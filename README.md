# bing-map-box
bing map component in react.js

## Installation 
```sh
npm install bing-map-box --save

```
## Usage

### react.js
```typescript
import { BingMapBox, LatLng } from "bing-map-box";

let center1: LatLng;
center1 = { latitude: 47.60357, longitude: -122.32945 };


<BingMapBox
    className="mapClass"
    apiKey="<YOUR_API_KEY>"
    center={center1}
></BingMapBox>
```
