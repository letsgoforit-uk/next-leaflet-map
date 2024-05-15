import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";
const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const polyline: LatLngExpression[] | LatLngExpression[][] = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.53, -0.12],
];

const centre: [x: number, y: number] = [51.505, -0.09];

export default function Home() {
  return (
    <main>
      <DynamicMap line={polyline} centre={centre} />
    </main>
  );
}
