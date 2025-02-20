import React from "react";
import "./styles.css"; // ✅ Import styles
import OrderList from "./components/OrderList";
import AddOrder from "./components/AddOrder";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";

const App = () => {
    return (
        <div className="app-container">
            {/* ✅ Add a header container for better logo placement */}
            <header className="app-header">
                <img src="/onestopd_logo.jpeg" alt="App Logo" className="app-logo" />
                <h1 className="app-title">ONESTOPD Order & Item Management</h1>
            </header>

            <div className="grid-container">
                <div className="section">
                    <AddOrder />
                </div>
                <div className="section">
                    <OrderList />
                </div>
                <div className="section">
                    <AddItem />
                </div>
                <div className="section">
                    <ItemList />
                </div>
            </div>
        </div>
    );
};

export default App;