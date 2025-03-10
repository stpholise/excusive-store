import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; 
import cartReducer from './slices/cartSlice';
import wishlistReducer from './slices/wishlistSlice'; 
// import checkoutReducer from './slices/_checkoutSlice'; 

import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

 
    const rootReducer =  combineReducers({
        user: userReducer, 
        cart: cartReducer, 
        // checkout: checkoutReducer, 
        wishlist: wishlistReducer,
    } )

const persistConfig = {
    key: 'Exclusive',
    storage: storageSession,
    whitelist: ['user',  'cart', 'orders', 'checkout', 'wishlist' ]
}

 
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'], // Ignore redux-persist actions
        },
      }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;