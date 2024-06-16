import "./main.css";
import mainAllImages from "../../utils/images-main.js";
//Componente 3

function ImageProduct() {
    return(
        <>
         <div class="container">
        <div className="imagenes_producto">
            <div className="imagen_producto">
                <img src={mainAllImages.earbuds_01_celeste}/>
            </div>
        </div>
        </div>
       </>
    )
    };

export default ImageProduct;