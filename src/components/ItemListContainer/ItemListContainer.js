
import ItemCount from "../ItemCount/ItemCount"
import { useEffect,useState } from "react"
import "./ItemListContainer.css"
//import getData from "../../Services/getData"
import ItemList from "../ItemList/ItemList"


export const ItemListContainer=({greeting})=>{
    const[products, setProducts]=useState([]);
    const getProductsAsyncAwait = async()=> {
        const getProductAA= await fetch ("https://coderhouse.franncode.com/api/products")
        const getProducts = await getProductAA.json()
        setProducts(getProducts)
    };

    useEffect(()=>{
        getProductsAsyncAwait()
    },[])

    
    return(
    <div className="itemListContainer">
         <h1 className="greeting">{greeting}</h1>
         <ItemCount stock={15} initial={1}/>
         <ItemList products={products}/>
    
     </div>  


    
    )
}

/*--------------------------------------------------*/
/*console.log("Productos de ILC",products);*/
   /*const getProductsFetch =()=>{
        fetch("https://coderhouse.franncode.com/api/products")
        .then((res)=>console.log("Veamos que responde fetch",res.json()))
        .then((data)=> setProducts(data));
    };*/

    /*useEffect(()=>{
        getProductsFetch();
        },[]);*/

   /* useEffect(()=>{
        getData
        .then((res)=> setProducts(res))
        .catch((err)=> alert("Error",err));
    });*/