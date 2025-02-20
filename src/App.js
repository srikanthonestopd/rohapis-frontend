import React, { useState } from "react";
import "./styles.css";
import OrderList from "./components/OrderList";
import AddOrder from "./components/AddOrder";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";

const App = () => {
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    return (
        <div className="app-container">
            <header className="app-header">
                <img src="/onestopd_logo.jpeg" alt="App Logo" className="app-logo" />
                <h1 className="app-title">Order & Item Management</h1>
            </header>

            <div className="grid-container">
                <div className="section">
                    {/* ✅ Pass setRefreshTrigger to AddOrder */}
                    <AddOrder setRefreshTrigger={setRefreshTrigger} />
                </div>
                <div className="section">
                    {/* ✅ Pass refreshTrigger to OrderList */}
                    <OrderList refreshTrigger={refreshTrigger} />
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