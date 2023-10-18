import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useState } from 'react';

const Location = () => {
  const {dispatch} = useContext(AppContext);
  const [Location, setLocation] = useState("Pound(£)");
    const changeLocation = (val)=>{
            let value;
            if(val === "Pound(£)"){
               value="£"
            }else if(val === "Dollar($)"){
               value="$"
            }else if(val === "Ruppee(₹)"){
               value="₹"
            }else if(val === "Euro(€)"){
               value="€"
            }  
            dispatch({
                type: 'CHG_LOCATION',
                payload: value,
            })
    }
    

  return (
        <div className='alert alert-secondary'>{
      <select name="Location" className='btn btn-success btn-sm' id="Location" value={`Currency`} style={{backgroundColor:"#a6e3a1",borderColor:"#a6e3a1"}} onChange={(event)=>{changeLocation(event.target.value);setLocation(event.target.value)}}>
        <option value="Currency" style={{display:"none"}}>Currency({Location})</option>
        <option value="Pound(£)">Pound(£)</option>
        <option value="Dollar($)">Dollar($)</option>
        <option value="Ruppee(₹)">Ruppee(₹)</option>
        <option value="Euro(€)">Euro(€)</option>
      </select>	
      }	
    </div>
    );
};

export default Location;