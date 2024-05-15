"use client";

import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const Map = (props: {
  line: LatLngExpression[] | LatLngExpression[][];
  centre: [x: number, y: number];
}) => {
  return (
    <div className="m-12">
      <h1 className="font-bold">Map</h1>
      <MapContainer center={props.centre} zoom={13} style={{ height: "80vh" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline pathOptions={{ color: "red" }} positions={props.line} />
      </MapContainer>
    </div>
  );
};

export default Map;
