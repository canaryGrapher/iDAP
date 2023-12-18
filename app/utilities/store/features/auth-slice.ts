import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { changePage } from "./sidebar-slice"

type AuthStateType = {
    isAuthenticated: boolean
    username: string
}

const initialState: AuthStateType = {
    isAuthenticated: false,
    username: "",
}

export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action: PayloadAction<string>) => {
            changePage({
                page: "dashboard",
                section: "Journeys"
            })
            return {
                isAuthenticated: true,
                username: action.payload,
            }
        }
    }
})

export const { logIn, logOut } = auth.actions;
export default auth.reducer;