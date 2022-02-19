
const initialState = {
    assets : [],
    favorite : []
}

function rootReducer (state= initialState, action) {
    switch(action.type) {
        case 'GET_ASSETS':
            return {
                ...state,
                assets:action.payload
            }
        case 'ORDER_BY_NAME':
            let sortArr = action.payload === 'asc' ?
            state.assets.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;          
            }) :
            state.assets.sort(function (a,b) {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                assets: sortArr
            }
            case 'ADD_FAVORITE':
                return{
                    ...state,
                    favorite: state.favorite.includes(action.payload)? state.favorite.filter((el) => el !== action.payload):[...state.favorite, action.payload]
                }
            default:
                return state;
    }
}

export default rootReducer;
