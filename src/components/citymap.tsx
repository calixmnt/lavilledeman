import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import epingleIcon from "../assets/epingle.png";
import { touristSpots } from "../lib/constant.ts";
import { useState } from "react";
import { TouristSpot } from "../lib/types.ts";
import NewCard from "./newcard.tsx";

const CityMap = () => {
  const center: [number, number] = [7.4125, -7.5536];
  const [selectedSpot, setSelectedSpot] = useState<TouristSpot | null>(null);

  const customIcon = new Icon({
    iconUrl: epingleIcon,
    iconSize: L.point(38, 38, true),
  });

  const createCustomClusterIcon = (cluster: { getChildCount: () => unknown; }) => {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: L.point(38, 38, true),
    });
  };

  return (
    <section className="container city-map" id="city-map">
      <div className="map-description-wrapper">
        <MapContainer
          center={center}
          zoom={12}
          style={{ height: "430px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkerClusterGroup
            chunckedLoading
            iconCreateFunction={createCustomClusterIcon}
          >
            {touristSpots.map((spot, i) => (
              <Marker
                key={i}
                icon={customIcon}
                position={spot.position}
                eventHandlers={{
                  click: () => {
                    setSelectedSpot(spot);
                  },
                }}
              >
                <Popup>
                  <h3 className="third-heading">{spot.name}</h3>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
          {selectedSpot ? (
            <NewCard number="" title={selectedSpot.name} description={selectedSpot.description}/>
          ) : (
            <p>
              Sélectionnez un lieu touristique sur la carte pour voir les
              détails.
            </p>
          )}
        {/* <div className="description-panel">
        </div> */}
      </div>
    </section>
  );
};

export default CityMap;
