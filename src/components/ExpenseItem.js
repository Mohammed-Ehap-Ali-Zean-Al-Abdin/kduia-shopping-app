import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle,FaMinusCircle,FaPlusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };
    const handleIncreaseItemBy10 = () => {
        const item = {
            name: props.name,
            allocatedBudget:10
        };

        dispatch({
            type: 'ADD_QUANTITY',
            payload: item,
        });
    };
    const handleDecreaseItemBy10 = () => {
        const item = {
            name: props.name,
            allocatedBudget:10
        };

        dispatch({
            type: 'RED_QUANTITY',
            payload: item,
        });
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{parseInt(props.allocatedBudget)}</td>
        <td><FaPlusCircle size='2.2em' color="#69ac65" onClick={handleIncreaseItemBy10}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="#a22e1f" onClick={handleDecreaseItemBy10}></FaMinusCircle></td>
        <td><FaTimesCircle size='1.2em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;