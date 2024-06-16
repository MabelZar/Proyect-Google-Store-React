import footerImages from "../../utils/images-provider";
import "./component-cart-main.css"


const CartMain = () => {
    return (
    <>
        <div className="cart-container">
            <div className="cart-header">
                <h1>Cart</h1>
                <p>()</p>
            </div>
            <div className="cart-content">
                <div className="cart-items">
                    <div className="cart-item">
                        <img className="item-image" alt="earbuds" src={footerImages.earbuds_01_celeste}/>
                        <div className="item-details">
                            <h2>Google Pixel Buds Pro in light blue</h2>
                            <p>Cant: <select className="selec-btn">
                                <option>1</option>
                                <option>2</option>
                            </select>
                            </p>
                        </div>
                        <div className="price-info">
                            <p>229,00 €</p>
                            <a href="#" className="remove-link">Remove</a>
                        </div>
                        <div className="delivery-info">
                            <p id="text-delivery1"><img className="delivery-icon" alt="delivery" src={footerImages.icDelivery} /> Delivers 29 Apr to <span className="delivery-zip">08023</span></p>
                        </div>
                    </div>
                    <hr/>
                    <div className="cart-item">
                        <img className="item-image" src={footerImages.smartwatch} alt="smartwatch"/>
                        <div className="item-details">
                            <h2>Fitbit Inspire 3 in Midnight Zen</h2>
                            <p>Cant:<select className="selec-btn">
                                <option>1</option>
                                <option>2</option>
                            </select>
                            </p>
                        </div>
                        <div className="price-info">
                            <p>99,95 €</p>
                            <a href="#" className="remove-link">Remove</a>
                        </div>
                        <div className="delivery-info">
                            <p id="text-delivery"><img className="delivery-icon" alt="delivery" src={footerImages.icDelivery} /> Delivers 29 Apr to <span className="delivery-zip">08023</span></p>
                        </div>
                    </div>
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-details">
                        <p>Subtotal <span>€</span></p>
                        <p>Shipping costs <span>€</span></p>
                        <p>estimated VAT <span>Including</span></p>
                        <hr/>
                        <p>Total estimated <span>€</span></p>
                    </div>
                    <div className="conditions">
                        <p>With 3 monthly installments*</p>
                    </div>
                    <div className="button-final">
                        <button className="purchase-button">Complete the purchase</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default CartMain;