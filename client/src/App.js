import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './App.css';

const backendUrl = "http://localhost:3001";

const client = axios.create({
    baseURL: backendUrl,
});

const App = () => {
    const [orders, setOrders] = useState([]);

    const loadOrders = useCallback(async () => {
        const orders = await client.get('/orders');
        setOrders(orders.data);
    }, [client]);

    const handleAddOrder = async () => {
        await client.post('/orders');
        await loadOrders();
    };

    const handleDeleteOrder = async (id) => {
        await client.delete(`/orders/${id}`);
        await loadOrders();
    };

    useEffect(() => {
        (async () => {
            await loadOrders();
        })();
    }, [setOrders, loadOrders]);

    return (
        <div className="App">
            <button onClick={handleAddOrder}>Add Order</button>
            {orders.map((order) => (
                <div key={order._id}>
                    Order { order._id }
                    <button onClick={() => handleDeleteOrder(order._id)}>Complete</button>
                </div>
            ))}
        </div>
    );
}

export default App;
