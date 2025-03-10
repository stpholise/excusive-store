import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    isAuthenticated: boolean;
    user: {
        name: string;
        email: string;
    }| null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };

  const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers:{
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
          },
          loginSuccess: (state, action: PayloadAction<UserState["user"]>) => { //action: PayloadAction<any>
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loading = false;
          },
          loginFailure: (state, action ) => {
            state.loading = false;
            state.error = action.payload;
          },
          logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
          },
    }
  })

  export const { loginRequest, loginSuccess, loginFailure, logout } = userSlice.actions;

  export default userSlice.reducer;