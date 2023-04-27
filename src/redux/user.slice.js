import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const name = "users";
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();

const slice = createSlice({ name, initialState, reducers, extraReducers });
export const userActions = { ...slice.actions, ...extraActions };
export const userSlice = slice.reducer;

function createInitialState() {
    return {
        token: JSON.parse(localStorage.getItem("token")),
        getAllUsers: { status: 0, data: [] },
        error: null,
    };
}

function createReducers() {
    return {
        logOut,
    };
    function logOut(state) {
        state.token = null;
        localStorage.removeItem("token");
        return state;
    }
}

function createExtraActions() {
    return {
        getAllUsers: createAsyncThunk(
            `${name}getAllUsers`,
            async ({ token }) => {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const resp = await fetch(`http://localhost:3333/user`, options);
                const data = await resp.json();
                return data;
            },
        ),
        login: createAsyncThunk(`${name}login`, async ({ email, password }) => {
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },

                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            };

            const resp = await fetch(
                "http://localhost:3333/user/login",
                options,
            );
            const data = await resp.json();
            return data;
        }),
        register: createAsyncThunk(
            `${name}register`,
            async ({ email, password }) => {
                const options = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },

                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                };
                const resp = await fetch(
                    "http://localhost:3333/user/register",
                    options,
                );
                const data = await resp.json();
                console.log("🚀 ~ file: user.slice.js:84 ~ data:", data);
                return data;
            },
        ),
        upToLevel: createAsyncThunk(
            `${name}upToLevel`,
            async ({ id, level, token }) => {
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        level: level,
                    }),
                };
                const resp = await fetch(
                    `http://localhost:3333/user/level/${id}`,
                    options,
                );
                const data = await resp.json();
                console.log("🚀 ~ file: user.slice.js:74 ~ data:", data);
                return data;
            },
        ),
    };
}

function createExtraReducers() {
    return {
        ...getAllUsers(),
        ...login(),

        ...upToLevel(),
    };

    function getAllUsers() {
        const { pending, fulfilled, rejected } = extraActions.getAllUsers;
        return {
            [pending]: (state) => {
                state.getAllUsers.status = 1;
            },
            [fulfilled]: (state, action) => {
                state.getAllUsers.status = action.payload.status;
                state.getAllUsers.data = action.payload.data;
            },
            [rejected]: (state) => {
                state.getAllUsers.status = 2;
            },
        };
    }
    function login() {
        const { pending, fulfilled, rejected } = extraActions.login;
        return {
            [pending]: (state) => {},
            [fulfilled]: (state, { payload }) => {
                localStorage.setItem("token", JSON.stringify(payload));
                state.token = payload;
            },
            [rejected]: (state, { payload }) => {},
        };
    }

    function upToLevel() {
        const { pending, fulfilled, rejected } = extraActions.upToLevel;
        return {
            [pending]: (state) => {
                // return {
                //     ...state,
                //     updating: true,
                // };
                state.getAllUsers.status = 1;
            },
            [fulfilled]: (state, { payload }) => {
                // state.getAllUsers.data = [
                //     ...state.getAllUsers.data.filter(
                //         (post) => post.id !== payload.data.id,
                //     ),
                //     payload.data,
                // ];
                // state.getAllUsers.status = payload.status;
                // return {
                //     ...state,
                //     getAllUsers: {
                //         status: payload.status,
                //         data: [
                //             ...state.getAllUsers.data.filter(
                //                 (post) => post.id !== payload.data.id,
                //             ),
                //             payload.data,
                //         ],
                //     },
                // };
                const index = state.getAllUsers.data.findIndex(
                    (user) => user.id === payload.data.id,
                );
                console.log(index);
                if (index !== -1) {
                    state.getAllUsers.data[index] = payload.data;
                }
                state.getAllUsers.status = payload.status;
            },
            [rejected]: (state) => {
                return {
                    ...state,
                    updating: false,
                };
            },
        };
    }
}
