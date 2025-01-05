import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CardContainer from "./components/CardContainer/CardContainer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LoginModal from "./components/LoginModal/LoginModal";

function App() {
    return (
        <>
            <Header />
            <section className="contentContainer">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<CardContainer />} />
                    <Route path="/login" element={<LoginModal />} />
                </Routes>
            </section>
        </>
    );
}

export default App;
