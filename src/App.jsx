import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CardContainer from "./components/CardContainer/CardContainer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
    return (
        <>
            <Header />
            <section className="contentContainer">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<CardContainer />} />
                </Routes>
            </section>
        </>
    );
}

export default App;
