// I'm not using this in the application, but kept it as I'm curious about the useMap() function!

"use client";

import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Polyline,
} from "react-leaflet";

const polyline: [number, number][] = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.53, -0.12],
];

const data: [x: number, y: number] = [51.505, -0.09];

function MyComponent() {
  const map = useMap();
  map.setView([51.505, -0.09], 13);
  return null;
}

const Map = () => {
  return (
    <div className="m-12">
      <h1 className="font-bold">Map</h1>
      <MapContainer center={data} zoom={13} style={{ height: "80vh" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={data}></Marker>
        <Polyline pathOptions={{ color: "red" }} positions={[polyline]} />
        <MyComponent />
      </MapContainer>
    </div>
  );
};

export default Map;
