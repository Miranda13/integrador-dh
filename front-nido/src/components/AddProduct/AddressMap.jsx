import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { OpenStreetMapProvider }  from "react-leaflet-geosearch";
import SearchControl from "./SearchControl";
import L, { marker } from "leaflet";
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

class AddressMap extends React.Component {
  
  render() {
      let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  const positionCenter = [-34.602180283842394, -58.3721960746728];
 
 

  const { position, zoom } = this.props;

    const prov = OpenStreetMapProvider();
    
    


    return (
      <MapContainer center={positionCenter} zoom={10} interactive={true} interactive={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      
        
        <SearchControl
          provider={prov}
          showMarker={true}
          marker={marker}
          showPopup={false}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={1}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={false}
          searchLabel={"Busque la dirección en el mapa"}
          keepResult={true} 
          draggable={true}  
         
          onResult={(e) => {
            console.log(this.props.onResult(e.result.center));
            
          }}


        />
      
       
  
      </MapContainer>
    );
  }
}

export default AddressMap;