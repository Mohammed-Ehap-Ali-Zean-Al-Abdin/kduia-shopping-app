import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {Budget , dispatch , Location , totalExpenses} = useContext(AppContext);
    const [budget, setbudget] = useState(Budget);
    const changeBudget = (val)=>{
        dispatch({
            type: 'CHG_BUDGET',
            payload: val,
        })
}
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Location}</span>
            <input type='number' max={20000} min={totalExpenses} step={10} value={budget} onChange={(event)=>{event.target.value>20000||event.target.value<totalExpenses?alert(`The minimum value is ${Location} 2000 and the maximum value is ${Location} 20000`):setbudget(event.target.value); changeBudget(event.target.value)}}/>
        </div>
    );
};

export default Budget;
