import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentProject: null,
    error: null,
    loading: false

}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        addProjectStart: (state) =>{
            state.loading = true;
            state.error = null;
        },
        addProjectSucess:(state, action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        projectAddFailure:(state, action) =>{
            state.loading = false;
            state.error = action.payload;

        },
        UserSignOutSuccess:(state)=>{
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        getProjectStart: (state) =>{
            state.loading = true;
            state.error = null;
        },
        getProjectSuccess:(state, action) =>{
            state.currentProject = action.payload;
            state.loading = false;
            state.error = null;
        },
        getProjectFailure:(state, action) =>{
            state.loading = false;
            state.error = action.payload;
        },
        deleteProjectStart: (state) =>{
            state.loading = true;
            state.error = null;
        },
        deleteProjectSuccess:(state, action) =>{
            state.loading = false;
            state.error = null;
            state.currentProject = null;
        },
        deleteProjectFailure:(state, action) =>{
            state.loading = false;
            state.error = action.payload;
            state.currentProject = null;
        },
        updateProjectStart: (state) =>{
            state.loading = true;
            state.error = null;
            state.currentProject = null;
            state.currentProject = {...state.currentProject};
            state.currentProject.status = action.payload.status;
        },
        updateProjectSuccess:(state, action) =>{
            state.loading = false;
            state.error = null;
            state.currentProject = {...state.currentProject,...action.payload};
        }

    },
});
export const {
    addProjectStart,
    addProjectSucess,
    projectAddFailure,
    getProjectStart,
    getProjectSuccess,
    getProjectFailure,
    deleteProjectStart,
    deleteProjectSuccess,
    deleteProjectFailure,
    updateProjectStart,
    updateProjectSuccess,
    updateProjectFailure,

    
} = projectSlice.actions;
export default projectSlice.reducer;