import React ,{ useState, useEffect }from 'react';
import PlaceList from './PlaceList';
import Map from './Map';
import { useSelector ,useDispatch} from 'react-redux';
import { setLocation, setMarkers } from '../action'

const Nearby = () =>{
    const [spining,SetSpining] = useState(null);
    const [listPlaces,SetlistPlaces] = useState([]);
    const [location, Setlocation] = useState(null);


    const searchText = useSelector(state => state.food);
    const markers = useSelector(state => state.markers);
    const dispatch = useDispatch();

    const getGeolocation = () => {
        const geolocationUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key='+process.env.REACT_APP_MAP_API_KEY;
        (function() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', geolocationUrl);
            xhr.onload = function () {
                var response = JSON.parse(this.responseText);
                Setlocation('location='+response.location.lat+','+response.location.lng);
                dispatch(setLocation({lat:response.location.lat,lng:response.location.lng}))
            }
            xhr.send();
        })();
    
    }

    
    const searchFood = ()=>{
        
        SetSpining(true);
        const places = [];
        const url = 'https://cors-anywhere.herokuapp.com/'+'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'+location+'&radius=3000&type=restaurant&keyword='+searchText+'&key='+process.env.REACT_APP_MAP_API_KEY;
        
        fetch(url)
        .then(res=> res.json())
        .then(res=>{
            for (let googlePlace of res.results) {
                var place = {};
                var myLat = googlePlace.geometry.location.lat;
                var myLong = googlePlace.geometry.location.lng;
                var location = {
                    lat: myLat,
                    lng: myLong,
                };
                place['rating'] = googlePlace.rating;
                place['location'] = location;
                place['placeId'] = googlePlace.place_id;
                place['placeName'] = googlePlace.name;
                places.push(place);
            }
            SetlistPlaces(places);
            dispatch(setMarkers(places))
            SetSpining(false);
        })
        .catch(error => { 
            console.log(error);
            SetSpining(false);
        });
    }
    useEffect(()=>{
        getGeolocation()
    },[])

    useEffect(()=>{
        if(markers && markers.length !== 0){
            searchFood()
        }
    },[searchText])

    
    return(
        <>
            <button style={{"marginLeft":"15px"}} onClick={()=>searchFood()}>推薦我店面</button>
            <div style={{"padding":"2rem 0"}}>
                {spining && (<div>Loading....</div>)}
                <div className="Place_result">
                    <div className="Place_result_list">
                    { listPlaces && 
                        listPlaces.map((place)=>(
                            <PlaceList  placeName={place.placeName}
                                        location={place.location} 
                                        rating={place.rating}
                                        key={place.placeId}>
                            </PlaceList>
                            ))
                    }
                    </div>
                    
                        <Map></Map>
                </div>
                
            </div>
            </>
    )
}

export default Nearby;