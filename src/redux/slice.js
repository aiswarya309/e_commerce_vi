import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const createCartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        saveForLater :[]
    },
    reducers: {
        addToCart: (state, action) => {
            const exists = state.cart.find((item)=>item.id === action.payload.id)
            if(!exists){
                const qty = action.payload.quantity ?? 1
                state.cart.push({...action.payload,quantity: qty})
            }
        },
        increment: (state,action) => { 
            const item = state.cart.find((item)=>item.id === action.payload)
            if(item){
                item.quantity +=1
            }
          
         },
        decrement: (state,action) => { 
            const item = state.cart.find((item)=>item.id === action.payload)
            if(item && item.quantity == 1)
                item.quantity = 1
                else
                    item.quantity -=1
         },
        removeItem: (state,action) => { 
            state.cart = state.cart.filter((item)=>item.id !== action.payload)
            
         },
         saveforLater:(state,action)=>{
            const item = state.cart.find((item)=>item.id === action.payload.id)
            state.saveForLater.push(item);
           state.cart = state.cart.filter((item)=>item.id !== action.payload.id)
         },
         removeSaved:(state,action)=>{
            state.saveForLater = state.saveForLater.filter(item=>item.id !== action.payload)
         }
    }
})
export const { addToCart, increment, decrement, removeItem ,saveforLater,removeSaved,SaveCartDecrement,saveCartIncrement} = createCartSlice.actions;
export default createCartSlice.reducer;