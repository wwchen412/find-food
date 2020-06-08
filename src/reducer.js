import { GET_RANDOM_FOOD, SET_GEOLOCATION ,SET_MARKERS} from './action';


const  success = (pos)=> {
    var crd = pos.coords;
    
    return {
        lat:crd.latitude,
        lng:crd.longitude
    }
   
  };

const initialState = {
    food: '',
    foodList:['pizza','麵','雞肉飯','日式','拉麵','速食','泰式','義大利麵','早午餐','韓式','咖喱飯','火鍋','自助餐','美式漢堡','港式','河粉','滷味'],
    location: window.navigator.geolocation.getCurrentPosition(success),
    markers:[]
}
function appFood (state = initialState, action){
    switch (action.type){
        case GET_RANDOM_FOOD:
            return{
                ...state,
                food:state.foodList[Math.floor(Math.random() * state.foodList.length)]
            }
        case SET_GEOLOCATION:
            return{
                ...state,
                location:{...action.location
                }
            }
        case SET_MARKERS:
            return{
                ...state,
                markers:[...action.markers]
            }
        default:
            return state;
    }
}

export default appFood;