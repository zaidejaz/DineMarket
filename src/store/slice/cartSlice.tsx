import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
export interface CounterState {
    totalAmount: number,
    totalQuantity: number,
    items: any[]
}

// Define the initial state using that type
const initialState: CounterState = {
    totalAmount: 0,
    totalQuantity: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<any>) => {
            state.totalQuantity += action.payload.quantity;
        },
        removeFromCart: (state, action:PayloadAction<any>) => {
            state.totalQuantity -= action.payload.quantity;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        clearCart: (state) => {
            state = initialState;
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer