import './App.css'
import Login from "./page/auth/Login";
import DashBoard from './page/dashboard/DashBoard';
import Exam from './page/Exams/Exam';
import RouterDasboard from './RouterDasboard';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<RouterDasboard/>}>
          <Route path="dashboard" element={<DashBoard/>}/>
          <Route path="dashboard/exam" element={<Exam/>}/>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
