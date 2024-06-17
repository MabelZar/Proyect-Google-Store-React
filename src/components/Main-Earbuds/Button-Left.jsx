import "./main.css";
import mainAllImages from "../../utils/images-main.js";

//Componente 2

function ButtonLeft() {

    return(
        <>
        <div className="container">
        <div className="imagenes_producto">
            <div className="iconos_earbuds">
                <ul>
                    <li><button><img src={mainAllImages.earbuds_01_celeste}/></button></li>
                    <li><button><img src={mainAllImages.e_frente_01_celeste}/></button></li>
                    <li><button><img src={mainAllImages.e_laretal_01_celeste}/></button></li>
                    <li><button><img src={mainAllImages.e_par_01_celeste}/></button></li>
                </ul>
            </div>
        </div> 
        </div>
       </>
    )
};


export default ButtonLeft;