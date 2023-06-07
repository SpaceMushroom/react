import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const Map = ({ lat, lng }) => {
  const latitude = +lat;
  const longitude = +lng;

  const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={5}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
      <Marker position={[latitude, longitude]} icon={customMarkerIcon} />
    </MapContainer>
  );
};

export default Map;
