import React, { useEffect, useState } from "react";
import { getOrders } from "../api";

const OrderList = ({ refreshTrigger }) => {
    const [orders, setOrders] = useState([]); // ✅ Initialize as an empty array

    // Fetch orders when component mounts or when refreshTrigger changes
    useEffect(() => {
        getOrders()
            .then(response => {
                setOrders(response.data || []); // ✅ Ensure response data is always an array
            })
            .catch(error => {
                console.error("Error fetching orders:", error);
                setOrders([]); // ✅ Set to an empty array on error
            });
    }, [refreshTrigger]);

    return (
        <div>
            <h2 className="section-title">Order List</h2>
            <div className="order-list-container">
                <ul className="order-list">
                    {orders.length > 0 ? (
                        orders.map(order => (
                            <li key={order.order_id}>
                                <strong>{order.customer_name}</strong> -{" "}
                                <span className="order-status">{order.status}</span> ($
                                {order.total_amount})
                            </li>
                        ))
                    ) : (
                        <p>No orders available</p> // ✅ Show message if no orders
                    )}
                </ul>
            </div>
        </div>
    );
};

export default OrderList;