// src/Components/AddExpenseComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const AddExpenseComponent = () => {
    const [amount, setAmount] = useState('');
    const [details, setDetails] = useState('');
    const [paymentCategory, setPaymentCategory] = useState('RENT'); // Default value
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            amount: parseInt(amount, 10),
            details,
            paymentCategory
        };

        axios.put('http://localhost:8080/add-expense', newTransaction)
            .then(response => {
                if (response.data) {
                    setSuccess('Expense added successfully!');
                    setAmount('');
                    setDetails('');
                    setPaymentCategory('RENT'); // Reset to default value
                } else {
                    setSuccess(null);
                    setError('Failed to add expense.');
                }
            })
            .catch(error => {
                console.error('Error adding expense:', error);
                setSuccess(null);
                setError('Failed to add expense.');
            });
    };

    return (
        <div className='expense'>
            <h2>ADD EXPENSE</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Description:
                    <input
                        type="text"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Category:
                    <select
                        value={paymentCategory}
                        onChange={(e) => setPaymentCategory(e.target.value)}
                        required
                    >
                        <option value="DEPOSIT">Deposit</option>
                        <option value="RENT">Rent</option>
                        <option value="COMMUTE">Commute</option>
                        <option value="FOOD">Food</option>
                        <option value="GROCERIES">Groceries</option>
                        <option value="OTHERS">Others</option>
                    </select>
                </label>
                <br />
                <button type="submit">Add Expense</button>
            </form>
            {success && <div style={{ color: 'green' }}>{success}</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default AddExpenseComponent;
