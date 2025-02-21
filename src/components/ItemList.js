import React, { useState } from "react";
import axios from "axios";

const ItemList = () => {
    const [itemId, setItemId] = useState("");
    const [item, setItem] = useState(null);
    const [error, setError] = useState("");

    const fetchItem = async () => {
        setError(""); // Clear previous errors
        setItem(null); // Reset previous item

        if (!itemId.trim()) {
            setError("Please enter a valid Item ID");
            return;
        }

        try {
            const response = await axios.get(`https://onestopd-golang-rohapis-3.onrender.com/api/get/${itemId}`);
            setItem(response.data);
        } catch (err) {
            setError("Item not found or API error");
            console.error("Fetch error:", err);
        }
    };

    return (
        <div>
            <h2>Fetch Item from Couchbase</h2>
            <input
                type="text"
                placeholder="Enter Item ID"
                value={itemId}
                onChange={e => setItemId(e.target.value)}
            />
            <button onClick={fetchItem}>Fetch Item</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {item && (
                <div>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                </div>
            )}
        </div>
    );
};

export default ItemList;