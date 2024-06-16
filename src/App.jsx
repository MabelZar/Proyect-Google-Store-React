import { useState } from "react";
import Earbuds from "./Earbuds";
import Watches from "./Watches";
import Cart from "./Cart";
import Header from "./components/Header/Header-component.jsx";

function App() {
  const [activeComponent, setActiveComponent] = useState('earbuds');
  const handleClick = (component) => {
    setActiveComponent(component);
  };


  const headerImages = {
    cart: "./images/icons/Cart.svg",
  };

  return (
    <div>
      <Header
        handleClick={handleClick}
        activeComponent={activeComponent}
        headerImages={headerImages}
      />

      <div>
        {activeComponent === "earbuds" && <Earbuds />}
        {activeComponent === "watches" && <Watches />}
        {activeComponent === "cart" && <Cart />}
      </div>
    </div>
  );
}
export default App;
