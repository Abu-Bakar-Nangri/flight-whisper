import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixing the default icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationMap = (props) => {
  const [location, setLocation] = useState({ latitude: props.latitude, longitude: props.longitude });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location.latitude || !location.longitude) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            setError(error.message);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    }
  }, [location.latitude, location.longitude]);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : location.latitude && location.longitude ? (
        <MapContainer
          center={[location.latitude, location.longitude]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
          />
          <Marker position={[location.latitude, location.longitude]}>
            <Popup>
              You are here!
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LocationMap;
