import "./main.css";
import mainAllImages from "../../utils/images-main.js";

//Componente 1

function ArrowLeft() {

    return (
        <>
        <div className="container">
         <div className="content-flecha">
              <img id="imagen_icono_flecha" alt="earbuds" src={mainAllImages.arrow}/>
              <label className="subtitles_menu"> See products details </label>
          </div>
          </div>
       </>
    )
};

export default ArrowLeft;