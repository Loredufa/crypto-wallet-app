import React from "react";
import { addFavorite } from '../actions';
import {useDispatch, useSelector} from 'react-redux';
import "./Card.css"

export default function Card ({icon, name, symbol, price}) {
    const dispatch = useDispatch()
    const favorite = useSelector((state) =>state.favorite)

    function handleFavorite () {
        dispatch(addFavorite (name))
    }

return (
    <div className="card">
        <img className="photo" src={icon} alt="img not found" width="100px" height="100px"/>
        <div>
        <h3>{name}</h3>
        <h5>{symbol}</h5>
        <h5>Price: EUR {price.toFixed(2)}</h5>
        <button className="botton" onClick={handleFavorite}>
            {favorite.includes (name)?
            <img src={require("../assets/heart-red.png")} alt="img not found" width="50px" height="50px"/>
            :
            <img src={require("../assets/heart_love.png")} alt="img not found" width="50px" height="50px"/>}
            </button>
        </div>
    </div>
)

}