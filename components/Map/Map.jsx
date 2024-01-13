import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

const Map = ({ location }) => {
    return <MapContainer style={{
        width: '100%', height: '326px'
    }} center={location} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             />
            <Marker position={location}>
                <Popup>
                    Designo Office
                </Popup>
            </Marker>
    </MapContainer>;
};

Map.displayName = "MyMap";

export default Map;