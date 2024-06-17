import "./main.css";

//Componente 5

function InfoProduct({ currentName, currentPrice, changeProduct }) {

    return(
        <>
        <div classname="container">
            <div className="content_products_descript">
                <div className="descripcion_producto"> 
                    <h1>{currentName}</h1>
                    <p className="subtitles_menu">Music & Sound</p>
                    <h2 id="precio">{currentPrice} €</h2>
                    <hr></hr>
                    <p className="subtitles_menu">Choose a color</p>
                    <div className="buttoms-colors">
                        <ul>
                            <li><button id="buttomblueP01" onClick={() => changeProduct('P01')}></button></li>
                            <li><button id="buttomlightgrayP02" onClick={() => changeProduct('P02')}></button></li>
                            <li><button id="buttomblackP03" onClick={() => changeProduct('P03')}></button></li>
                            <li><button id="buttomgrayP04" onClick={() => changeProduct('P04')}></button></li>
                            <li><button id="buttomgreenP05" onClick={() => changeProduct('P05')}></button></li>
                            <li><button id="buttompinkP06" onClick={() => changeProduct('P06')}></button></li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
        </>
    )
};


export default InfoProduct;