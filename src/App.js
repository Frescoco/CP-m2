/* 1️⃣ ***COMPONENTE APP*** 1️⃣
Implementar el componente App. En este ejercicio tendrás que crear diferentes RUTAS para otros componentes. 
¡Ten en cuenta los nombres y las especificaciones de cada uno!

REQUISITOS
🟢 El componente Nav debe renderizarse en todas las rutas.
🟢 El componente Home debe renderizarse en la ruta "/".
🟢 El componente DeporteDetail debe renderizarse en la ruta "/deportes/:id".
🟢 El componente CreateDeporte debe renderizarse en la ruta "/deportes/create".
*/

import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import DeporteDetail from './components/DeporteDetail/DeporteDetail.jsx';
import CreateDeporte from './components/CreateDeporte/CreateDeporte.jsx'
import Nav from './components/Nav/Nav.jsx';


const App = () => {

  
  return <div>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/deportes/:id" element={<DeporteDetail/>}></Route>
      <Route path="/deportes/create" element={<CreateDeporte/>}></Route>
    </Routes>
   
  </div>;
};
export default App;
