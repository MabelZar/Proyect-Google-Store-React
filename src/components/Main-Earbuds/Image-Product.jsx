import "./main.css";
import mainAllImages from "../../utils/images-main.js";
//Componente 3

function ImageProduct({ currentImage }) {
    return(
        <>
         <div classname="container">
        <div className="imagenes_producto">
            <div className="imagen_producto">
                <img src={ currentImage }/>
            </div>
        </div>
        </div>
       </>
    )
    };

export default ImageProduct;