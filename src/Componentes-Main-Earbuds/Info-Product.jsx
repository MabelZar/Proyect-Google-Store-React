import "./main.css";

//Componente 5

function InfoProduct() {

    return(
        <>
        <div class="container">
            <div className="content_products_descript">
                <div className="descripcion_producto"> 
                    <h1>Google Pixel Buds Pro</h1>
                    <p className="subtitles_menu">Music & Sound</p>
                    <h2 id="precio">229 €</h2>
                    <hr></hr>
                    <p className="subtitles_menu">Choose a color</p>
                    <div className="buttoms-colors">
                        <ul>
                            <li><button id="buttomblue"></button></li>
                            <li><button id="buttomlightgray"></button></li>
                            <li><button id="buttomblack"></button></li>
                            <li><button id="buttomgray"></button></li>
                            <li><button id="buttomgreen"></button></li>
                            <li><button id="buttompink"></button></li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
        </>
    )
};


export default InfoProduct;