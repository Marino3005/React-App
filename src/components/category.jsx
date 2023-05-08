import { useState, useEffect } from 'react'
import "../assets/css/category.css"

const Products = () => {
    const [products, setProducts] = useState([]);
    

    const obtenerDatos =  ()=>{
        fetch('http://localhost:3010/api/category')
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
    const revelarCategorias = () => {
        let bodyProductos = document.querySelector('#revelar-body-category')
        bodyProductos.classList.toggle('revelarCate')
    }
    useEffect(() => {
        obtenerDatos()
    }, [])

    
    let count = products.length
    return(
        <div className='contenedor'>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <button className="card-header py-3"  onClick={revelarCategorias}>
                    <h4 className="m-0 font-weight-bold text-gray-800">Categorias</h4>
                    </button>
                </div>
                <div className="card-body revelarCate" id='revelar-body-category'>
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Count = {count}</li>
                        {
                        products.length > 0 ?
                        products.map((product , i) =>{
                          return  <li className="list-group-item" key = {product + i}>
                                {product.CategoryProduct.name} - {product.count}
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