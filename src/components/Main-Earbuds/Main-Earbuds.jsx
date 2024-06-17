import { useState } from 'react';
import ArrowLeft from "./Arrow-Left";
import ButtonLeft from "./Button-Left";
import ImageProduct from "./Image-Product";
import InfoProduct from "./Info-Product";
import InfoBox from "./Info-Box";
import { products, getEarbuds } from "./data.js";

function MainEarbuds() {

    const earbuds = getEarbuds();
    const [currentImage, setCurrentImage] = useState(products[0].image);
    const [currentName, setCurrentName] = useState(products[0].name);
    const [currentPrice, setCurrentPrice] = useState(products[0].price);

    
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