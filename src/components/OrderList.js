import React, { useEffect, useState } from "react";
import { getOrders } from "../api";

const OrderList = ({ refreshTrigger }) => {
    const [orders, setOrders] = useState([]); // ✅ Default to an empty array

    useEffect(() => {
        getOrders()
            .then(response => {
                console.log("API Response:", response); // ✅ Log full API response
                if (response && response.data && Array.isArray(response.data)) {
                    setOrders(response.data); // ✅ Ensure response data is always an array
                } else {
                    setOrders([]); // ✅ Fallback if data is missing or not an array
                }
            })
            .catch(error => {
                console.error("Error fetching orders:", error);
                setOrders([]); // ✅ Ensure orders is never null
            });
    }, [refreshTrigger]);

    return (
        <div>
            <h2 className="section-title">Order List</h2>
            <div className="order-list-container">
                {orders.length > 0 ? (
                    <ul className="order-list">
                        {orders.map(order => (
                            <li key={order.order_id}>
                                <strong>{order.customer_name}</strong> -{" "}
                                <span className="order-status">{order.status}</span> ($
                                {order.total_amount})
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No orders available</p> // ✅ Prevents crash when list is empty
                )}
            </div>
        </div>
    );
};

export default OrderList;