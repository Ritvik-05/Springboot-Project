// // src/Components/SpendAnalysisComponent.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const SpendAnalysisComponent = () => {
//     const [analysisData, setAnalysisData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get('http://localhost:8080/analysis/spend-analysis')
//             .then(response => {
//                 setAnalysisData(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error fetching spend analysis data:', error);
//                 setError('Failed to load data');
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;
//     if (!analysisData) return <div>No data available</div>;

//     return (
//         <div className='analysis'>
//             <h1>Spend Analysis</h1>
//             <p><strong>Rent: ₹</strong>{analysisData.rent}</p>
//             <p><strong>Commute: ₹</strong>{analysisData.commute}</p>
//             <p><strong>Food: ₹</strong>{analysisData.food}</p>
//             <p><strong>Groceries: ₹</strong>{analysisData.groceries}</p>
//             <p><strong>Others: ₹</strong>{analysisData.others}</p>
//             <p><strong>Deposit: ₹</strong>{analysisData.deposit}</p>
//         </div>
//     );
// };

// export default SpendAnalysisComponent;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const SpendAnalysisComponent = () => {
    const [analysisData, setAnalysisData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/analysis/spend-analysis')
            .then(response => {
                setAnalysisData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching spend analysis data:', error);
                setError('Failed to load data');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!analysisData) return <div>No data available</div>;

    // Prepare data for the pie chart
    const data = {
        labels: ['Rent', 'Commute', 'Food', 'Groceries', 'Others', 'Deposit'],
        datasets: [{
            data: [
                analysisData.rent,
                analysisData.commute,
                analysisData.food,
                analysisData.groceries,
                analysisData.others,
                analysisData.deposit
            ],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40'
            ],
            borderColor: '#fff',
            borderWidth: 1
        }]
    };

    return (
        <div className='analysis'>
            <h2>SPEND ANALYSIS</h2>
            <div className='analysis-data'>
            <div className='details'>
                <p style={{ backgroundColor: '#FF6384' }}><strong>Rent: ₹</strong>{analysisData.rent}</p>
                <p style={{ backgroundColor: '#36A2EB' }}><strong>Commute: ₹</strong>{analysisData.commute}</p>
                <p style={{ backgroundColor: '#FFCE56' }}><strong>Food: ₹</strong>{analysisData.food}</p>
                <p style={{ backgroundColor: '#4BC0C0' }}><strong>Groceries: ₹</strong>{analysisData.groceries}</p>
                <p style={{ backgroundColor: '#9966FF' }}><strong>Others: ₹</strong>{analysisData.others}</p>
                <p style={{ backgroundColor: '#FF9F40' }}><strong>Deposit: ₹</strong>{analysisData.deposit}</p>
            </div>
            <div>
                <Pie data={data} />
            </div>
            </div>
        </div>
    );
};

export default SpendAnalysisComponent;
