import './App.css'
import Login from "./page/auth/Login";
import DashBoard from './page/dashboard/DashBoard';
import Exam from './components/Exams/Exam';
import ResultExam from './components/resultExams/ResultExam';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/exam" element={<ResultExam/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
