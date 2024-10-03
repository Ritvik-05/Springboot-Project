
import './App.css';
import AddExpenseComponent from './Components/AddExpense';
import SpendAnalysisComponent from './Components/Analysis';
import DashboardComponent from './Components/Dashboard';
import TransactionsComponent from './Components/Transactions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar title="Treasurer"/>
        <Routes>
          <Route path="/"  element={<DashboardComponent />} />
          <Route path="/spend-analysis" element={<SpendAnalysisComponent />} />
          <Route path="/transactions" element={<TransactionsComponent />} />
          <Route path="/add-expense" element={<AddExpenseComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
