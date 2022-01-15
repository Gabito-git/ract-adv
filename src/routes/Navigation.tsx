import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import {FormikAbstraction, FormikBasicPage, FormikComponents,
        FormikYupPage, RegisterPage
} from "../03-forms/pages";


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
              <NavLink to="/formik-basic" end>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" end>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" end>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" end>Formik Abstraction</NavLink>
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

          <Route path="/formik-yup" element={<FormikYupPage />} />  

          <Route path="/formik-components" element={<FormikComponents />} />   

          <Route path="/formik-abstraction" element={<FormikAbstraction />} />   
       
          <Route path="/users" element={<h1>Users</h1>} />
        
          <Route path="/register" element={<RegisterPage />} />
           
        </Routes>
      </div>
    </Router>
  );
}
