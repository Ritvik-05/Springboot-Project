
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardComponent = () => {
    const [dashboardData, setDashboardData] = useState(null); // Start with null until data is fetched
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/home/dashboard')
            .then(response => {
                console.log(response.data);  // Check if data is being received
                setDashboardData(response.data);
                setLoading(false);  // Data fetched successfully
            })
            .catch(error => {
                console.error('Error fetching dashboard data:', error);
                setError(error.message);
                setLoading(false);  // Stop loading if there's an error
            });
    }, []);

    if (loading) return <p>Loading...</p>;  // Show loading message until data is fetched
    if (error) return <p>Error: {error}</p>;  // Show error message if API call fails

    return (
        <div>
            <div className='dashboard'>
                <h2>DASHBOARD</h2>
                <div className="total-balance">
                    <p className='dashboard-item' ><strong>Total Balance: </strong><br /> <span> ₹{dashboardData.totalBalance}</span></p>
                </div>
                <div className="monthly">
                    <p className='dashboard-item' style={{ backgroundColor: '#9E71CE' }}><strong>Monthly Expense: <br />  </strong> <span> ₹{dashboardData.monthlyExpense}</span></p>
                    <p className='dashboard-item' style={{ backgroundColor: '#86D1B3' }}><strong>Monthly Income: <br /> </strong> <span> ₹{dashboardData.monthlyIncome}</span></p>
                </div>
                   </div>
        </div>
    );
};

export default DashboardComponent;
