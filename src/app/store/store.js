import { configureStore } from '@reduxjs/toolkit';
import mainMenuSliceReducer from './mainMenuSlice';
import userSliceReducer from './userSlice';

export default configureStore({
    reducer:{
      menu: mainMenuSliceReducer,
      user: userSliceReducer
    }
});