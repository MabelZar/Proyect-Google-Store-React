import { useState } from 'react';
import "./watches-component.css"
import ImagesWatches from "../../utils/images-watches.js";
import { products, getSmartwatch } from "./data.js";

function WatchesComponent(){

    // Estado inicial con la imagen por defecto
    const [currentImage, setCurrentImage] = useState(ImagesWatches.smartwatch_black);
    // Estado inicial con el nombre por defecto
    const [currentName, setCurrentName] = useState('Fitbit Inspire 3 Black')
    // Estado inicial con el precio por defecto
    const [currentPrice, setCurrentPrice] = useState('99.95');
    
    // Función para cambiar los datos del producto
    const changeProduct = (productId) => {
        let productElement = products.filter(item => item.id === productId)[0];
        setCurrentName(productElement.name);
        setCurrentImage(productElement.image);
        setCurrentPrice(productElement.price);
    };

    return(
        <>
        <div className='containerGeneralWatches'>
        <section className="back">
             <a><img src={ImagesWatches.arrow}/><p>See product details</p></a>
        </section>   
    
        <section className="watchProducto">
         
            <div className="imagenProducto">
                <img src={currentImage} alt={"Foto del Smartwatch en negro"}/>
            </div>

            <div className="producto">
                <div className="modeloProducto">
                    <h2>{currentName}</h2>
                    <p>Health & Fitness Tracker</p>
                    <h3>€ {currentPrice}</h3>
                    <hr className="linea"/>
                    <p>Choose a color</p>
                    <div className="modeloColor">
                    
                    {getSmartwatch().map((product) => (    
                        
                        <div key={product.id} className="colorReloj" onClick={() => changeProduct(product.id)}>
                            <img src={product.image} alt={product.name}/>
                            <p>{product.name}</p>
                        </div>

                    ))}

                    </div>
                </div>
                
                <div className="modeloCompra">
                    <h2>€ {currentPrice}</h2>
                    <hr/>
                    <div className="compraAñadir">
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <button >Add to Cart</button>
                    </div>
                    
                    <div className="modeloEnvío">
                        <img src={ImagesWatches.delivery} alt="Icono de envíos"/>
                        <p>Delivers  29 Apr to <span>08023</span></p>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </>
    )
}
export default WatchesComponent;
