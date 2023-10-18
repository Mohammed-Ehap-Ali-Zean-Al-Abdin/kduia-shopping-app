import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.allocatedBudget = expense.allocatedBudget + action.payload.allocatedBudget;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

            case 'RED_QUANTITY':
                state.expenses.map((expense)=>{
                    if(expense.name === action.payload.name) {
                        expense.allocatedBudget = expense.allocatedBudget - action.payload.allocatedBudget;
                    }
                    expense.allocatedBudget = expense.allocatedBudget < 0 ? 0: expense.allocatedBudget;
                    new_expenses.push(expense);
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";
                return {
                    ...state,
                };
        case 'DELETE_ITEM':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.allocatedBudget = 0;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
        case 'CHG_LOCATION':
                action.type = "DONE";
                state.Location = action.payload;
                return {
                    ...state
                };
        case 'CHG_BUDGET':
                action.type = "DONE";
                state.Budget = action.payload;
                return {
                    ...state
                };

        default:
            return state;
    }
};
let Expenses =[
    { id: "Marketing", name: 'Marketing',allocatedBudget: 50 },
    { id: "Finance", name: 'Finance',allocatedBudget: 300 },
    { id: "Sales", name: 'Sales',allocatedBudget: 70 },
    { id: "Human Resource", name: 'Human Resource',allocatedBudget: 40 },
    { id: "IT", name: 'IT',allocatedBudget: 500 },
]
let budget = 2000;
let TotalExpenses = Expenses.reduce((total, item) => {
    return (total += item.allocatedBudget);
}, 0)
// 1. Sets the initial state when the app loads
const initialState = {
    expenses: Expenses,
    Location: '£',
    Budget:budget,
    totalExpenses: TotalExpenses ,
    Remaining: budget - TotalExpenses,
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const TotalExpenses= state.expenses.reduce((total, item) => {
        return (total += item.allocatedBudget);
    }, 0)
    state.totalExpenses = TotalExpenses;
    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                dispatch,
                Location: state.Location,
                Budget:state.Budget,
                totalExpenses:state.totalExpenses,
                Remaining:state.Budget-state.totalExpenses
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};