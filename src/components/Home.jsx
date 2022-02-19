import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAssets, orderByName } from '../actions';
import { Link } from 'react-router-dom';
import Card from './Card'
import './Home.css'
import styled from 'styled-components';


export default function Home () {
    const dispatch = useDispatch()
    const allAssets = useSelector((state) =>state.assets)
    const [orden, setOrden] = useState('')

    // useEffect(() => {
    //    dispatch(getAssets());    
    // },[dispatch])

    useEffect(() => {
        dispatch(getAssets())
        setInterval(() => {
            dispatch(getAssets())
        }, 60000)
    }, [dispatch])

    
    function handleSort (e) {
        e.preventDefault();
        dispatch(orderByName (e.target.value))
        setOrden(`Ordenado ${e.target.value}`)  
    }

return (
<div >
    <h1>Crypto wallet app</h1> 
    <div className="select"> 
<Select  onChange={e => handleSort(e)}>
    <option value='asc'>A-Z</option>
    <option value='desc'>Z-A</option>
</Select>
<div>
<Link to="/favorite"> <Button> Favorite </Button> </Link>    
    </div> 
    </div>
<div className="home">
{ allAssets?.map((el) => {
    return (
    <div>  
    <Card key={el.id} icon={el.icon} name={el.name} symbol={el.symbol}  price={el.price}/>   
    </div>
 )
  })}
</div>
</div>

)

}

const Select = styled.select`
font-family: 'Source Sans Pro', sans-serif;
background-color: #2a6f97;
height: 50px;
width:15vw;
font-size: 20px;
margin-left: 200px;
text-align: center;
border-radius:10px;
`
const Button = styled.button`
font-family: 'Source Sans Pro', sans-serif;
background-color: #2a6f97;
height: 50px;
width:15vw;
font-size: 35px;
margin-right: 70px;
margin-left:250%;
text-align: center;
border-radius:10px;
`