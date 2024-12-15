import "./App.css";
import CardContainer from "./components/CardContainer/CardContainer";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header />
            <section className="contentContainer">
                <CardContainer />
            </section>
        </>
    );
}

export default App;
