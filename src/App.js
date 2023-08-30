import "./style.css";
import MainNavbar from "./components/MainNavbar";
import HomePage from "./pages/HomePage";
import PittyProfiles from "./pages/PittyProfiles";
import FeaturedCards from "./components/FeaturedCards";
import FooterJsx from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNavbar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin/:pittyprofiles" element={<PittyProfiles />} />
          </Routes>
        </div>
        <FeaturedCards />
        <FooterJsx />
      </div>
    </BrowserRouter>
  );
}

/*
function App() {
  return (
    <BrowserRouter>
      <div className="App">







function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      

            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    
  );
}
*/
