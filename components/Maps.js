import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Maps = ({ searchResult }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResult.map(({ lat, long }) => {
    return { latitude: lat, longitude: long };
  });

  const { latitude, longitude } = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={viewport}
      style={{ width: "100%", height: "100%" }}
      onMove={(e) => setViewport(e.viewState)}
    >
      {searchResult.map((result) => (
        <div key={result.lat}>
          <Marker latitude={result.lat} longitude={result.long} anchor="bottom" offset={[12, 6]}>
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.lat === result.lat && (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
              latitude={result.lat}
              longitude={result.long}
              offset={[0, -10]}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Maps;
