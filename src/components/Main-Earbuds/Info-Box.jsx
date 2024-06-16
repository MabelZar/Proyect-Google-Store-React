import "./main.css";
import mainAllImages from "../../utils/images-main.js";
//Componente 4

function InfoBox() {
    return(
        <>
         <div class="container">
        <div className="content_products_descript">
            <div className="content-box">
                <label id="monto">229 €</label>
                <select className="Buttom4">
                    <option selected>1</option>
                    <option selected>2</option>
                </select>
                <button className="buttom5"><b>Add to Cart</b></button>
                <p className="buttom3"><img src={mainAllImages.Delivery}/><b>Delivers 29 Apr to <label>08023</label></b></p>
            </div>
        </div>
        </div>
       </>
    )
    };

export default InfoBox;