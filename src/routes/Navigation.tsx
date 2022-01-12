import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import FormikBasicPage from "../03-forms/pages/FormikBasicPage";
import RegisterPage from "../03-forms/pages/RegisterPage";

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={logo} alt="React Logo"/>
          <ul>
            <li>
              <NavLink to="/register" end>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic " end>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/users" end>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/formik-basic" element={<FormikBasicPage />} />      
       
          <Route path="/users" element={<h1>Users</h1>} />
        
          <Route path="/register" element={<RegisterPage />} />
           
        </Routes>
      </div>
    </Router>
  );
}
