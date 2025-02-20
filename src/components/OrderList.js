import React, { useEffect, useState } from "react";
import { getOrders } from "../api";

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders()
            .then((response) => setOrders(response.data))
            .catch((error) => console.error("Error fetching orders:", error));
    }, []);

    return (
        <div>
            <h2 className="section-title">Order List</h2>
            <ul className="order-list">
                {orders.map((order) => (
                    <li key={order.order_id}>
                        <strong>{order.customer_name}</strong> -{" "}
                        <span className="order-status">{order.status}</span> ($
                        {order.total_amount})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;