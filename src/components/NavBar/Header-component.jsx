import "./Header-component.css"
import heaterImages from "../../images-Header.js"

function HeaderComponent() {
    return(
      <>
      <div className='barra-nav'>
          <img alt="Logo" src={heaterImages.logo} className='google-logo'/>
          <nav className="nav">
              <ul>
                  <li><a href="#" className="menu">Phones</a></li>
                  <li><a href="#"><b id="a_select">Earbuds</b></a></li>
                  <li><a href="#" className="menu">Watches</a></li>
                  <li><a href="#" className="menu">Smart Home</a></li>
                  <li><a href="#" className="menu">Accessories</a></li>
                  <li><a href="#" className="menu">Suscriptions</a></li>
              </ul>
          </nav>
     
      <div className='iconos-menu'>
          <img id="search" alt="Search" className='icono' src={heaterImages.search}/>
          <img alt="Help" className='icono' src={heaterImages.help}/>
          <img alt="Cart" className='icono' src={heaterImages.cart}/>
         
          <img alt="Avatar" className='icono' src={heaterImages.avatar}/>
          <img alt="menu_ham" src={heaterImages.menu} className='icono' id="ham"/>
      </div>
      </div>
      </>
    )
  }
export default HeaderComponent ;
