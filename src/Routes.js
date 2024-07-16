import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "Pages/Inicio";
import PaginaErro from "Pages/PaginaErro";
import NovoVideo from "Pages/NovoVideo";
import Header from "Components/Header";
import Footer from "Components/Footer";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Inicio />} />
        <Route path="/novovideo" element={ <NovoVideo />} />
        <Route path="*" element={ <PaginaErro />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
