import "./Header-component.css"
import headerImages from "../../utils/images-Header.js"

function HeaderComponent() {
    return(
      <>
         <div className='barra-header'>
            <div className='barra-nav'>
                <img alt="Logo" src={headerImages.logo} className='google-logo'/>
                <nav className="nav">
                    <ul>
                    <a href="#" className="menu">Phones</a>
                    <li><a href="#"><b id="a_select">Earbuds</b></a></li>
                    <li><a href="#" className="menu">Watches</a></li>
                    <li><a href="#" className="menu">Smart Home</a></li>
                    <li><a href="#" className="menu">Accessories</a></li>
                    <li><a href="#" className="menu">Suscriptions</a></li>
                     </ul>
                 </nav>
                 <div className='iconos-menu'>
                    <img id="search" alt="Search" className='icono' src={headerImages.search}/>
                    <img alt="Help" className='icono' src={headerImages.help}/>
                    <img alt="Cart" className='icono' src={headerImages.cart}/>
                    <img alt="Avatar" className='icono' src={headerImages.avatar}/>
                    <img alt="menu_ham" src={headerImages.menu} className='icono' id="ham"/>
                 </div>
            </div>
         </div>
      </>
    )
  }
export default HeaderComponent;
