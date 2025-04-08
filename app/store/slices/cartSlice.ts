import { createSlice, PayloadAction } from '@reduxjs/toolkit';  
 


interface Product {
    _id:string
    name:string;
    slug: string;
    image:{
        url: string;
        alt: string;
    };
    percentOff?: number;
    stars?:number;
    price:number;
    previousPrice?:number
    liked?:boolean
 }

export interface CartItem { 
    product: Product;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    initialState,
    name: 'cart',
    
    reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
            const { product, quantity } = action.payload;
            const existingItem = state.items.find(item => item.product._id === product._id);

            if (existingItem) {
                existingItem.quantity += quantity;
              } else {
                state.items.push({ product, quantity });
            }
            state.totalQuantity += quantity;
            state.totalPrice += product.price * quantity;
    },
    clearCart: (state) =>{ 
        state.items = [];
        state.totalQuantity = 0;
        state.totalPrice = 0;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
        const productId = action.payload; 
        
            
            state.items = state.items.filter(item => item.product._id !== productId);
        
    },
    updateCartItem: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
        const { productId, quantity } = action.payload;
        const existingItem = state.items.find(item => item.product._id === productId);
  
        if (existingItem) {
          state.totalQuantity += quantity - existingItem.quantity;
          state.totalPrice += (quantity - existingItem.quantity) * existingItem.product.price;
          existingItem.quantity = quantity;
        }
      },
    }
})

export const { addToCart, clearCart, removeFromCart, updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;