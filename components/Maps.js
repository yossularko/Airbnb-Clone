import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Maps = ({ searchResult }) => {
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
      onMove={(e) => console.log('viewport: ', e)}
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
