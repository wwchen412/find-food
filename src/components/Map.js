import React, { useState } from 'react'
import { 
    GoogleMap, 
    useLoadScript ,
    Marker,
    InfoWindow
} from '@react-google-maps/api';
import { useSelector,useDispatch } from 'react-redux';
import { setSelected }from '../action';
import mapStyles from './mapStyles';
import vector from '../img/mark.svg';

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
    const selected = useSelector(state => state.selected);
    const dispatch = useDispatch();
    

    if(loadError) return 'Error loading maps';
    if(!isLoaded) return 'Loading maps';
    if(markers && markers.constructor === Array && markers.length === 0) return null
    
    return(
       
       <GoogleMap   mapContainerStyle={mapContainerStyle}
                    zoom={15}
                    center={center}
                    options={options}
                    defaultVisible={false}>
            {markers.map(marker => 
                <Marker 
                        key={marker.placeId}
                        icon={{ url: vector,
                                scaledSize: new window.google.maps.Size(30, 30)
                            }}
                position={{ lat: marker.location.lat, lng:marker.location.lng}}
                onClick={()=>dispatch(setSelected(marker))}
                
            />)}

            {selected ? (<InfoWindow    position={{lat:selected.location.lat,lng:selected.location.lng}}>
                    <div>
                        <h4>{selected.placeName}</h4>
                    </div>
                </InfoWindow>) : null}
       </GoogleMap>
    )
}