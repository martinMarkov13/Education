import { configureStore } from "@reduxjs/toolkit";
// const reduxLogger = require('redux-logger')
import { usersApi } from "../features/apiSlice";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";

// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
    [usersApi.reducerPath]: usersApi.reducer 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
});

export default store;