import React, { useState } from "react";
import { addOrder } from "../api";

const AddOrder = ({ setRefreshTrigger }) => {
    const [customerName, setCustomerName] = useState("");
    const [totalAmount, setTotalAmount] = useState("");
    const [status, setStatus] = useState("Processing"); // ✅ Default status

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newOrder = {
            customer_name: customerName,
            total_amount: parseFloat(totalAmount),
            status: status, // ✅ Include status
        };

        try {
            await addOrder(newOrder);
            alert("Order added successfully!");
            setCustomerName("");
            setTotalAmount("");
            setStatus("Processing"); // ✅ Reset to default status

            // ✅ Refresh order list
            setRefreshTrigger(prev => prev + 1);
        } catch (error) {
            console.error("Error adding order:", error);
        }
    };

    return (
        <div>
            <h2 className="section-title">Add New Order</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Total Amount"
                    value={totalAmount}
                    onChange={e => setTotalAmount(e.target.value)}
                    required
                />

                {/* ✅ Add Status Dropdown */}
                <select value={status} onChange={e => setStatus(e.target.value)} required>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                </select>

                <button type="submit">Add Order</button>
            </form>
        </div>
    );
};

export default AddOrder;