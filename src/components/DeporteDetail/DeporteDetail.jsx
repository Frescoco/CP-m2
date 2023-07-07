/* 8️⃣ ***COMPONENTE deportDetail*** 8️⃣

Implementar el componente deportDetail. En este ejercicio tendrás que renderizar las diferentes propiedades del deport.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" del deport cuando se monta el componente. Luego, traer esa 
información de tu estado global.
🟢 Tendrás que renderizar algunos datos del deport correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser FUNCIONAL.
❗Para obtener el "id" puedes utilizar useParams.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState' 
      - 'React.useEffect'
*/

import './deporteDetail.css';
import React from 'react';
import * as actions from "./../../redux/actions/index";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//import { getDeporteDetail } from '../../redux/actions/index';



const DeporteDetail = (props) => {
      const dispatch = useDispatch();
      const { id } = useParams();
      const deportState = useSelector((state)=> state.deporteDetail);

      React.useEffect(()=>{
            dispatch(actions.getDeporteDetail(id));

      },[dispatch, id]);

   
   return <div className='detail'>
      {deportState?.nombre && (
            <div>
            <h1>{deportState.nombre}</h1>
            <img src={deportState.imagen} alt={deportState.nombre} />
            <h3>Descripcion: {deportState.descripcion}</h3>
            <h5>Reglas: {deportState.reglas}</h5>
            <h5>Equipamiento: {deportState.equipamiento}</h5>
            <h5>Origen: {deportState.lugar_de_origen}</h5>
            <h5>Ligas destacadas: {deportState.ligas_destacadas}</h5>
      </div>
      )}
              
   </div>;
};

export default DeporteDetail;
