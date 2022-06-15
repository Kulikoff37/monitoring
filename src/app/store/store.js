import { configureStore } from '@reduxjs/toolkit';
import mainMenuSliceReducer from './mainMenuSlice';
import userSliceReducer from './userSlice';
import usersSlice from '../../pages/Users/store/usersSlice';

export default configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer:{
      menu: mainMenuSliceReducer,
      user: userSliceReducer,
      users: usersSlice
    }
});