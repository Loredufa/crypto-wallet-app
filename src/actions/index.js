import axios from "axios";
//  <meta http-equiv="refresh" content="60" />

export function getAssets () {
    return async function(dispatch) {
        var json = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=12');
        return dispatch({
            type: 'GET_ASSETS',
            payload: json.data.coins
        })
               
    } 
}

export function orderByName (payload) {
    return {
        type:'ORDER_BY_NAME',
        payload
    }
}

export function addFavorite (payload) {
    return {
        type:'ADD_FAVORITE',
        payload
    }
}

