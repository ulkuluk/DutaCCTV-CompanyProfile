import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Products from "./pages/Products";
import Packages from "./pages/Packages";
import CustomerService from "./pages/CustomerService";
import FAQ from "./pages/Faq";
import Recruitment from "./pages/Recruitment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:brand" element={<Packages />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/recruitment" element={<Recruitment />} />
      </Routes>
    </BrowserRouter>
  );
}
