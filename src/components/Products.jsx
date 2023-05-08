import { useState, useEffect } from 'react'
import "../assets/css/Products.css"

const Products = () => {
    const [products, setProducts] = useState([]);
    

    const obtenerDatos =  ()=>{
        fetch('http://localhost:3010/api/products')
        .then(function(response){
            return response.json()
        })
        .then(function(productos){
            let productss = productos.data
            setProducts(productss)
        })
        .catch((error) => {
            console.error(error);
          });
    }
    console.log(products)
    const revelarProducts = () => {
        let bodyProductos = document.querySelector('.card-body')
        bodyProductos.classList.toggle('revelarProd')
    }
    useEffect(() => {
        obtenerDatos()
    }, [])
    
    
    let count = products.length
    return(
        <div className='contenedor'>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <button className="card-header py-3"  onClick={revelarProducts}>
                    <h4 className="m-0 font-weight-bold text-gray-800">Productos</h4>
                    </button>
                </div>
                <div className="card-body revelarProd">
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Count = {count}</li>
                        {
                        products.length > 0 ?
                        products.map((product , i) =>{
                          return  <li className="list-group-item" key = {product + i}>
                               id: {product.id} - {product.name}
                            </li>
                        })
                        :"Cargando..."

                    }
                        </ul>
                    
                    </div>
                    <p></p>
                    
                </div>
            </div>
        </div>
    )
}

export default Products;

        // { {
        //                             products.map((product, index) => {
                                        
        //                                 return <ProductChart {...product} key={index} />
        //                             })
        //                         } }