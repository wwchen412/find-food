import React, { useState } from 'react'
import { 
    GoogleMap, 
    useLoadScript ,
    Marker,
    InfoWindow
} from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import mapStyles from './mapStyles';

const libraries = ["places"];
const mapContainerStyle = {
    width: '60%',
    height: '400px'
}

const options = {
    styles:mapStyles,
    disableDefaultUI: true
}
export default function  Map(){

    const { isLoaded,loadError} = useLoadScript({
        googleMapsApiKey:process.env.REACT_APP_MAP_API_KEY,
        libraries,
    })

    const markers = useSelector(state => state.markers);
    const center = useSelector(state => state.location);

    const [selected,setSelected] = useState(null);
    

    if(loadError) return 'Error loading maps';
    if(!isLoaded) return 'Loading maps';
    if(markers && markers.constructor === Array && markers.length === 0) return null
    
    return(
       
       <GoogleMap   mapContainerStyle={mapContainerStyle}
                    zoom={14}
                    center={center}
                    options={options}
                    defaultVisible={false}>
            {markers.map(marker => <Marker 
                key={marker.placeId}
                position={{ lat: marker.location.lat, lng:marker.location.lng}}
                onClick={()=>setSelected(marker)}
                
            />)}
            {selected ? (<InfoWindow    position={{lat:selected.location.lat,lng:selected.location.lng}}
                                        onCloseClick={()=>setSelected(null)}>
                    <div>
                        <h2>{selected.placeName}</h2>
                    </div>
                </InfoWindow>) : null}
       </GoogleMap>
    )
}