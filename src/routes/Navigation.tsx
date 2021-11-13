import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom";

import logo from '../logo.svg';
import { routes } from "./routes";

export const Navigation = () => {
  return (
    // Se encierra en Suspense ya que dentro de <Router> es en donde se encuentran los componentes 
    // que en el archivo routes.ts se definieron como de carga perezosa. La idea del Suspense,
    // es tener un fallback, es decir, un componente el cual momstrar mientras se cargan los componentes
    // al ser llamados. Esto se hace solo durante la primera carga, luego de cargados ya quedan en memoria y 
    // este componente fallback no se muestra más
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={logo} alt="React Logo"/>
            <ul>
              {
                routes.map( ({ name, path } ) => (
                    <li key={name}>
                      <NavLink to={path} end>{name}</NavLink>
                    </li>
                  )
                )
              }          
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            {
              routes.map( ({path, name, Component}) => (
                  <Route 
                    key={name} 
                    path={path} 
                    element={<Component />} 
                  />
                )
              )
            }    

          <Route path="*" element={<Navigate replace to={routes[0].path}/>} />   
            
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}
