import './App.css'
import Login from "./page/auth/Login";
import DashBoard from './page/dashboard/DashBoard';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
