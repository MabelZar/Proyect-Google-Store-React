import "./Header-component.css"
import headerImages from "../../utils/images-Header.js"
import PropTypes from 'prop-types';

function HeaderComponent({ handleClick, activeComponent }) {
    return(
      <>
         <div className='barra-header'>
            <div className='barra-nav'>
                <img alt="Logo" src={headerImages.logo} className='google-logo'/>
                <nav className="nav">
                    <ul>
                    <a href="#" className="menu">Phones</a>
                    <li><a href="#" onClick={() => handleClick('earbuds')} className={activeComponent === 'earbuds' ? 'active' : ''}>
                    <b>Earbuds</b></a></li>
                    <li><a  href="#" onClick={() => handleClick('watches')} className={activeComponent === 'watches' ? 'active' : ''}>
                    <b>Watches</b></a></li>
                    <li><a href="#" className="menu">Smart Home</a></li>
                    <li><a href="#" className="menu">Accessories</a></li>
                    <li><a href="#" className="menu">Suscriptions</a></li>
                     </ul>
                 </nav>
                 <div className='iconos-menu'>
                    <img id="search" alt="Search" className='icono' src={headerImages.search}/>
                    <img alt="Help" className='icono' src={headerImages.help}/>
                   <a onClick={() => handleClick('cart')} className={activeComponent === 'cart' ? 'active' : ''}> <img alt="Cart" className='icono' src={headerImages.cart}/></a>
                    <img alt="Avatar" className='icono' src={headerImages.avatar}/>
                    <img alt="menu_ham" src={headerImages.menu} className='icono' id="ham"/>
                 </div>
            </div>
         </div>
      </>
    )
  }
  HeaderComponent.propTypes = {
   handleClick: PropTypes.func.isRequired,
   activeComponent: PropTypes.string.isRequired,
 };
 
export default HeaderComponent;
