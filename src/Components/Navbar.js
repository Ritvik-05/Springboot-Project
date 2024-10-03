import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {


    return (
        <div>
            <nav >
                <li className='title'>{props.title}</li>
                <li><a href="/">Home</a></li>
                <li><a href="/spend-analysis">Spend Analysis</a></li>
                <li><a href="/transactions">Transactions</a></li>
                <li><a href="/add-expense">Add Expense</a></li>
                <li><>Sign up</></li>
                <li>Login</li>
            </nav>
        </div>
    )
}


