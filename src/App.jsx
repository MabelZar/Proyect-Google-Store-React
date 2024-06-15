import FooterComponent from "./components/footer/component-footer.jsx";
import HeaderComponent from "./components/NavBar/Header-component.jsx";

import WatchesComponent from "./components/componente-watches/watches-component.jsx";
const App = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <WatchesComponent></WatchesComponent>
      <FooterComponent></FooterComponent>
      </>
    )
};

export default App;