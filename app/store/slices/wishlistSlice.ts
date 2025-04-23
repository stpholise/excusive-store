import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  name: string;
  image: {
    url: string;
    alt: string;
  };
  slug: string;
  percentOff?: number;
  stars?: number;
  price: number;
  previousPrice?: number;
  liked?: boolean;
}

export interface WishlistItem {
  product: Product;
}

interface WishlistState {
  items: WishlistItem[];
  wishlistQuantity: number;
}

const initialState: WishlistState = {
  items: [],
  wishlistQuantity: 0,
};

const wishlistSlice = createSlice({
  initialState,
  name: "wishlist",

  reducers: {
    addToWishlist: (
      state,
      action: PayloadAction<{ _id: string; product: Product }>,
    ) => {
      const product = action.payload;
      const existingItem = state.items.find(
        (item) => item.product._id === product._id,
      );
      if (existingItem) {
        state.items = state.items.filter(
          (item) => item.product._id !== product._id,
        );
        state.wishlistQuantity -= 1;
      } else {
        state.items = [product, ...state.items];
        state.wishlistQuantity += 1;
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find(
        (item) => item.product._id === productId,
      );
      if (existingItem) {
        state.items = state.items.filter(
          (item) => item.product._id !== productId,
        );
        state.wishlistQuantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.wishlistQuantity = 0;
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearCart } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
