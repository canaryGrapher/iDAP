import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/auth-slice"
import sidebarReducer from "./features/sidebar-slice"
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
    reducer: {
        authReducer,
        sidebarReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.getState

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector