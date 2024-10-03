// src/Components/TransactionsComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionsComponent = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/view-transactions')
            .then(response => {
                console.log('API Response:', response.data);  // Log the data to check
                setTransactions(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching transactions data:', error);
                setError('Failed to load transactions');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (transactions.length === 0) return <div>No transactions available</div>;

    return (
        <div className='transaction'>
            <h2>TRANSACTIONS</h2>
            <table className='responsive-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th className='col'>Amount</th>
                        <th className='col'>Date</th>
                        <th className='col'>Category</th>
                        <th className='col'>Description</th>
                    </tr>
                </thead>
               
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>₹{transaction.amount}</td>
                            <td>{new Date(transaction.date).toLocaleDateString()}</td>
                            <td>{transaction.paymentCategory}</td>
                            <td>{transaction.details}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionsComponent;
