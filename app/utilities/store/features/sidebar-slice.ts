import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type SidebarStateType = {
    currentPage: string
    currentSection: string
}

const initialState: SidebarStateType = {
    currentPage: "dashboard",
    currentSection: "Journeys"
}

export const sidebar = createSlice({
    name: 'sidebar',
    initialState: initialState,
    reducers: {
        changeSection: (state, action: PayloadAction<string>) => {
            return {
                currentPage: state.currentPage,
                currentSection: action.payload
            };
        },
        changePage: (state, action: PayloadAction<{ page: string, section: string }>) => {
            return {
                currentPage: action.payload.page,
                currentSection: action.payload.section
            }
        }
    }
})

export const { changePage, changeSection } = sidebar.actions;
export default sidebar.reducer;