import React, { useEffect, useState } from "react";
import { getOrders } from "../api";

const OrderList = ({ refreshTrigger }) => {
    const [orders, setOrders] = useState([]);

    // Fetch orders when component mounts or when refreshTrigger changes
    useEffect(() => {
        getOrders()
            .then(response => setOrders(response.data))
            .catch(error => console.error("Error fetching orders:", error));
    }, [refreshTrigger]); // ✅ Fetch data whenever refreshTrigger updates

    return (
        <div>
            <h2 className="section-title">Order List</h2>
            <div className="order-list-container">
                <ul className="order-list">
                    {orders.map(order => (
                        <li key={order.order_id}>
                            <strong>{order.customer_name}</strong> -{" "}
                            <span className="order-status">{order.status}</span> ($
                            {order.total_amount})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrderList;