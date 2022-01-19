import { useEffect,useState } from "react"
import {ItemDetail} from "../ItemDetail/ItemDetail"
import "../ItemDetailContainer/ItemDetailContainer.css"

export const ItemDetailContainer=({titulo})=>{
    const[itemsDetail, setItemDetail]=useState([]);
    const getItem= async()=> {
        try{
        const getItemAA= await fetch ('https://fakestoreapi.com/products?limit=1')
        const getItemDetail = await getItemAA.json()
        setItemDetail(getItemDetail)
        }catch(error){console.log(error)}
    };

    useEffect(()=>{
        getItem()
    },[])

    
    return(
    <div className="itemDetailContainer">     
         <h1 className="greeting">{titulo}</h1>
         <ItemDetail itemsDetail={itemsDetail}/>
    
     </div>  


    
    )
}