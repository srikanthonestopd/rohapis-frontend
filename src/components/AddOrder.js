import React, { useState } from "react";
import { addOrder } from "../api";

const AddOrder = () => {
    const [customerName, setCustomerName] = useState("");
    const [totalAmount, setTotalAmount] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newOrder = { customer_name: customerName, total_amount: parseFloat(totalAmount) };

        try {
            await addOrder(newOrder);
            alert("Order added successfully!");
            setCustomerName("");
            setTotalAmount("");
        } catch (error) {
            console.error("Error adding order:", error);
        }
    };

    return (
        <div>
            <h2>Add New Order</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Customer Name" value={customerName} onChange={e => setCustomerName(e.target.value)} required />
                <input type="number" placeholder="Total Amount" value={totalAmount} onChange={e => setTotalAmount(e.target.value)} required />
                <button type="submit">Add Order</button>
            </form>
        </div>
    );
};

export default AddOrder;