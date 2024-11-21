import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import Register from "./pages/Register/Register";

function App() {
    return (
        <div className="app">
            <Layout />
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
