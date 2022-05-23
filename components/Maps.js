import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Maps = ({ searchResult }) => {
  const coordinates = searchResult.map(({ lat, long }) => {
    return { latitude: lat, longitude: long };
  });

  const { latitude, longitude } = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude,
    longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(e) => setViewport(e.viewState)}
    >
      {searchResult.map(({ lat, long }) => (
        <Marker key={lat} latitude={lat} longitude={long} anchor="bottom">
          <p className="cursor-pointer text-2xl">📌</p>
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default Maps;
