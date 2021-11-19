// import React    from 'react';
// import{
//     GoogleMap,
//     withScriptjs,
//     withGoogleMap,
//     Marker, InfoWindow
// } from 'react-google-maps';
// import tv from "../../assets/images/icons/tv.svg";
// // const lat = this.props.lat;

// const Map = (props) => {
// const pos = {
//     lat: props.lat,
//     lng:props.lng
// } 
//     return(
//         <GoogleMap 
//         defaultZoom ={15}
//         defaultCenter={pos}
//         >
//             <Marker 
//                 name={'Nombre del hotel'}
//                 position={pos} 
//                 // icon={{
//                 //     url: tv                   
//                 //   }}    
//             />  
           
//         </GoogleMap>       
//     );
// };
// // loadingElement={<div style={{ height: `100%` }} />}

// export default withScriptjs(
//     withGoogleMap(Map)
//     );


import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


const MapView = (props) => { 
    const position = [props.lng, props.lat];
        console.log(position);

        return (
        <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
            position={position}
            title={props.productName}
            draggable={true}
        >
          <Popup>
          <span className="productName">{props.productName} </span><br />{props.category}
          </Popup>
        </Marker>
      </MapContainer>
    );
}
export default MapView;