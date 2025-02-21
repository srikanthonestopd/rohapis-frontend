import React, { useState, useEffect } from "react";
import { addItem } from "../api";
import axios from "axios";

const AddItem = () => {
    const [id, setId] = useState("Loading...");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    // Fetch next item ID
    const fetchNextItemID = async () => {
        try {
            const response = await axios.get("https://onestopd-golang-rohapis-3.onrender.com/api/next-id");
            setId(response.data.next_id);
        } catch (error) {
            console.error("Error fetching next ID:", error);
            setId("Error loading ID");
        }
    };

    useEffect(() => {
        fetchNextItemID();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { id, name, price: parseFloat(price) };

        try {
            await addItem(newItem);
            alert(`Item ${id} added successfully!`);
            setName("");
            setPrice("");
            fetchNextItemID();
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    return (
        <div>
            <h2 className="section-title">Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Item ID:</label>
                    <input type="text" value={id} readOnly />
                </div>
                <div className="form-group">
                    <label>Item Name:</label>
                    <input
                        type="text"
                        placeholder="Enter item name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        placeholder="Enter item price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;