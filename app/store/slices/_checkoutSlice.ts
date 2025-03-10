import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckoutState {
  shippingAddress: string | null;
  paymentMethod: string | null;
  orderSummary: {
    totalItems: number;
    totalAmount: number;
  };
  step: number; // 1: Shipping, 2: Payment, 3: Review
}

const initialState: CheckoutState = {
  shippingAddress: null,
  paymentMethod: null,
  orderSummary: { totalItems: 0, totalAmount: 0 },
  step: 1,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setShippingAddress: (state, action: PayloadAction<string>) => {
      state.shippingAddress = action.payload;
    },
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    },
    setOrderSummary: (state, action: PayloadAction<{ totalItems: number; totalAmount: number }>) => {
      state.orderSummary = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    resetCheckout: (state) => {
      state.shippingAddress = null;
      state.paymentMethod = null;
      state.orderSummary = { totalItems: 0, totalAmount: 0 };
      state.step = 1;
    },
  },
});

export const { setShippingAddress, setPaymentMethod, setOrderSummary, nextStep, prevStep, resetCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
