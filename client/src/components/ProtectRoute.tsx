import React, { useEffect } from 'react';
import { Route, useNavigate } from 'react-router-dom';

const ProtectRoute = ({ component: Component }) => {
    let navigate=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("token")==null){
            navigate('/Register')

        }
    })
  return (
   <div>
    <Component />
   </div>
  );
};

export default ProtectRoute;
