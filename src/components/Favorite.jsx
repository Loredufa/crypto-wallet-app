import React from 'react';
import {useSelector} from 'react-redux';
import Card from './Card'
//
export default function Favorite () {
    const allAssets = useSelector((state) =>state.assets)
    const favorite = useSelector((state) =>state.favorite)

    return (
        <div>
        <h1>My Favorite Coins</h1>
    <div>
    { allAssets?.map((el) => {
 
    return (
        favorite?.find((element) => element === el.name) && 
    <div>    
    <Card key={el.id} icon={el.icon} name={el.name} symbol={el.symbol}  price={el.price}/>
    </div> 
 )
  })}
    </div>
    </div>
    )

}