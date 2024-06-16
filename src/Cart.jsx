import CartMain from "./components/Main-cart/component-cart-main.jsx";
import FooterComponent from "./components/footer/component-footer.jsx";
import HeaderComponent from "./components/Header/Header-component.jsx"

const Cart = () => {
    return (
    <>
        <HeaderComponent></HeaderComponent>
        <CartMain></CartMain>
        <FooterComponent></FooterComponent>
    </>
)
};

export default Cart;