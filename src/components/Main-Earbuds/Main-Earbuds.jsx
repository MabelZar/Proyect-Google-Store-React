import { useState } from 'react';
import ArrowLeft from "./Arrow-Left";
import ButtonLeft from "./Button-Left";
import ImageProduct from "./Image-Product";
import InfoProduct from "./Info-Product";
import InfoBox from "./Info-Box";

import { products, getEarbuds } from "./data.js";

function MainEarbuds() {

    const [currentImage, setCurrentImage] = useState(products[0].image);
    // Estado inicial con el nombre por defecto
    const [currentName, setCurrentName] = useState(products[0].name);
    // Estado inicial con el precio por defecto
    const [currentPrice, setCurrentPrice] = useState(products[0].price);

    // Función para cambiar los datos del producto
    const changeProduct = (productId) => {
        const productElement = products.find(item => item.id === productId);
        setCurrentName(productElement.name);
        setCurrentImage(productElement.image);
        setCurrentPrice(productElement.price);
    };


    return(
        <>
        <div className="container-general">
            <ArrowLeft />
            <ButtonLeft />
            <ImageProduct currentImage={currentImage} />
            <InfoProduct
                currentName={currentName}
                currentPrice={currentPrice}
                changeProduct={changeProduct}
                products={products}
            />
            <InfoBox />
        </div>
    </>
);
}

export default MainEarbuds