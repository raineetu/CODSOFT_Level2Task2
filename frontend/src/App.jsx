import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components.jsx/Home/HomePage';
import JobDetails from './Components.jsx/OtherComp/JobDetails';
import Login from './Components.jsx/Auth/Login'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/jobdetail" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  )
}


