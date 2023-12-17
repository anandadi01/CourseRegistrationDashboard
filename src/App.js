import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import Home from './screen/Home';
import Login from './screen/Login';
import Register from './screen/Register';
import Dashboard from './screen/Dashboard';
import CourseDetail from './components/CourseDetail';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />            
            <Route exact path="/login" element={<Login />} />            
            <Route exact path="/register" element={<Register />} />            
            <Route exact path="/dashboard" element={<Dashboard />} />            
            <Route exact path="/coursedetail/:id" element={<CourseDetail />} />            
          </Routes>
        </div>
      </Router>
  );
}

export default App;
