import React, { useEffect, useState } from "react";
import './product.css'

const Products = () =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
      useEffect(()=>{
        (async()=>{
            await getProducts();

        })()

      },[])

      console.log(products);

      const getProducts = async ()=>{
        try{
            setLoading(true);
            const  response  = await fetch("https://dummyjson.com/products")
            const result = await response.json();
            setProducts(result.products)
            setLoading(false);
        }
        catch(error){
            console.log(error.message);
        }
      }

    if(loading){
    return <h2>Loading...</h2>
}
    return(
        <div>
            <h1>All Products</h1>
            {products.map(item=>(
                <div key={item.id}>
                    <img src={item.images[0]}/>
                <h2>{item.title}</h2>
                </div>

            ))}
        </div>
    )
}
export default Products;