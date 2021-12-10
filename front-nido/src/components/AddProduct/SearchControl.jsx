import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { GeoSearchControl } from 'leaflet-geosearch';
import "leaflet-geosearch/assets/css/leaflet.css";
import "./react-leaflet-geosearch.css";
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';



const SearchControl = (props) => {
  const map = useMap();

 
  useEffect(() => {   
  
    
    const searchControl = new GeoSearchControl({
      provider: props.provider,     
    });

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });


    // map.on('click', () => { console.log(e.latlng); });

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [props]);

  return null;
};
export default SearchControl;