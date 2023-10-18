import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const {Location,Remaining } = useContext(AppContext);
    return (
        <div className='alert alert-success'>
            <span>Remaining: {Location}{Remaining}</span>
        </div>
    );
};

export default Remaining;