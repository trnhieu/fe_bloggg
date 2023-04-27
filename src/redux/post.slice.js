import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const name = "posts";
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();

const slice = createSlice({ name, initialState, reducers, extraReducers });
export const postAction = { ...slice.actions, ...extraActions };
export const postSlice = slice.reducer;

function createInitialState() {
    return {
        postAll: [],
        categoryAll: [],
        postDraft: { status: 0, data: [] },
        draftById: { status: 0, data: null },
        postPending: { status: 0, data: [] },
        postAction: { status: 0, data: [] },
        image: "",
    };
}

function createReducers() {
    return {};
}

function createExtraActions() {
    return {
        getPostAll: createAsyncThunk(`${name}/getPostAll`, async () => {
            const resp = await fetch(`http://localhost:3333/blog`);
            const data = await resp.json();
            return data.data;
        }),
        getPostDraftAll: createAsyncThunk(
            `${name}/getPostDraftAll`,
            async ({ token }) => {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const resp = await fetch(
                    `http://localhost:3333/blog/readDraft`,
                    options,
                );
                const data = await resp.json();

                return data;
            },
        ),
        getCategoryAll: createAsyncThunk(`${name}/getCategoryAll`, async () => {
            const resp = await fetch("http://localhost:3333/category");
            const data = await resp.json();
            return data.data;
        }),
        addPost: createAsyncThunk(
            `${name}addpost`,
            async ({ value, token, image }) => {
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    body: JSON.stringify({
                        title: value.title,
                        content: value.content,
                        category_id: value.categoryId,
                        image: image,
                    }),
                };

                const resp = await fetch(
                    "http://localhost:3333/blog/create",
                    options,
                );
                const data = await resp.json();
                console.log(data);

                return data;
            },
        ),
        uploadImage: createAsyncThunk(`${name}uploadImage`, async (value) => {
            const file = value.target.files[0];

            const formData = new FormData();
            formData.append("image", file);
            console.log(
                "🚀 ~ file: post.slice.js:68 ~ uploadImage:createAsyncThunk ~ formData:",
                formData,
            );

            const options = {
                method: "PUT",
                body: formData,
            };

            const resp = await fetch("http://localhost:3333/up", options);
            const data = await resp.json();
            console.log(data);

            return data.data;
        }),
        deletePostDraft: createAsyncThunk(
            `${name}deniePost`,

            async ({ draftId, token }) => {
                const options = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };

                const rep = await fetch(
                    `http://localhost:3333/blog/deleteDraft/${draftId}`,
                    options,
                );
                const data = await rep.json();

                return data;
            },
        ),
        getDraftById: createAsyncThunk(
            `${name}getDraftById`,
            async ({ token, id }) => {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const resp = await fetch(
                    `http://localhost:3333/blog/readDraftByUser/${id}`,
                    options,
                );
                const data = await resp.json();
                console.log(
                    "🚀 ~ file: post.slice.js:142 ~ getDraftById:createAsyncThunk ~ data:",
                    data,
                );

                return data;
            },
        ),
        updateDraftById: createAsyncThunk(
            `${name}updateDraftById`,
            async ({ id, value, image, token }) => {
                const options = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        title: value.title,
                        content: value.content,
                        category_id: value.categoryId,
                        image: image,
                    }),
                };
                const resp = await fetch(
                    `http://localhost:3333/blog/updateDraft/${id}/`,
                    options,
                );
                const data = await resp.json();
                console.log("🚀 ~ file: post.slice.js:163 ~ data:", data);
                return data;
            },
        ),
        draftToPending: createAsyncThunk(
            `${name}draftToPending`,
            async ({ id, token }) => {
                const options = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const resp = await fetch(
                    `http://localhost:3333/blog/toPending/${id}`,
                    options,
                );
                const data = await resp.json();
                console.log("🚀 ~ file: post.slice.js:186 ~ data:", data);
                return data;
            },
        ),
        getPostPendingAll: createAsyncThunk(
            `${name}getPostPendingAll`,
            async ({ token }) => {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const resp = await fetch(
                    `http://localhost:3333/blog/readPending`,
                    options,
                );
                const data = await resp.json();
                console.log("🚀 ~ file: post.slice.js:208 ~ data:", data);
                return data;
            },
        ),
        upToActiveAndDownToDraft: createAsyncThunk(
            `${name}upToActiveandDownToDraft`,
            async ({ id, status, token }) => {
                const options = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        status: status,
                    }),
                };
                const resp = await fetch(
                    `http://localhost:3333/blog/approvePendding/${id}`,
                    options,
                );
                const data = await resp.json();
                console.log("🚀 ~ file: post.slice.js:228 ~ data:", data);
                return data;
            },
        ),
        getPostActiveAllByUser: createAsyncThunk(
            `${name}getPostActiveAllByUser`,
            async () => {
                const resp = await fetch(
                    `http://localhost:3333/blog/readActive`,
                );
                const data = await resp.json();
                return data;
            },
        ),
    };
}

function createExtraReducers() {
    return {
        ...getPostAll(),
        ...getAllCategory(),
        ...uploadImage(),
        ...addPost(),
        ...getPostDraftAll(),
        ...deletePostDraft(),
        ...getDraftById(),
        ...updateDraftById(),
        ...draftToPending(),
        ...getPostPendingAll(),
        ...upToActiveAndDownToDraft(),
        ...getPostActiveAllByUser(),
    };
    function getPostAll() {
        const { pending, fulfilled, rejected } = extraActions.getPostAll;
        return {
            [pending]: (state) => {
                state.postAll = { loading: true };
            },
            [fulfilled]: (state, { payload }) => {
                state.postAll = payload;
            },
            [rejected]: (state, { payload }) => {
                state.postAll = { error: payload.error };
            },
        };
    }
    function getAllCategory() {
        const { pending, fulfilled, rejected } = extraActions.getCategoryAll;
        return {
            [pending]: (state) => {
                state.categoryAll = { loading: true };
            },
            [fulfilled]: (state, action) => {
                state.categoryAll = action.payload;
            },
            [rejected]: (state, action) => {
                state.categoryAll = { error: action.payload.error };
            },
        };
    }
    function uploadImage() {
        const { pending, fulfilled, rejected } = extraActions.uploadImage;
        return {
            [pending]: (state) => {},
            [fulfilled]: (state, action) => {
                return {
                    ...state,
                    image: action.payload,
                };
            },
            [rejected]: (state, action) => {},
        };
    }
    function addPost() {
        const { pending, fulfilled, rejected } = extraActions.addPost;
        return {
            [pending]: (state) => {
                return {
                    ...state,
                };
            },
            [fulfilled]: (state, action) => {
                return {
                    ...state,
                    postDraft: {
                        updating: true,
                        data: [...state.postDraft.data, action.payload.data],
                        message: "them thanh cong",
                    },
                };
            },
            [rejected]: (state, action) => {
                return {
                    ...state,
                };
            },
        };
    }
    function getPostDraftAll() {
        const { pending, fulfilled, rejected } = extraActions.getPostDraftAll;
        return {
            [pending]: (state) => {
                return {
                    ...state,
                    postDraft: { status: 1 },
                };
            },
            [fulfilled]: (state, action) => {
                return {
                    ...state,
                    postDraft: {
                        status: action.payload.status,
                        data: action.payload.data,
                    },
                };
            },
            [rejected]: (state) => {
                return {
                    ...state,
                    postDraft: { status: 2 },
                };
            },
        };
    }
    function deletePostDraft() {
        const { pending, fulfilled, rejected } = extraActions.deletePostDraft;
        return {
            [pending]: (state) => {
                state.postDraft.status = 1;
            },
            [fulfilled]: (state, action) => {
                return {
                    ...state,
                    postDraft: {
                        status: action.payload.status,
                        data: [
                            ...state.postDraft.data.filter(
                                (draft) => draft.id !== action.payload.data,
                            ),
                        ],
                    },
                };
            },
            [rejected]: (state, action) => {
                state.postDraft.status = 2;
            },
        };
    }
    function getDraftById() {
        const { pending, fulfilled, rejected } = extraActions.getDraftById;
        return {
            [pending]: (state) => {
                return {
                    ...state,
                    draftById: { message: "dang cho xu ly" },
                };
            },
            [fulfilled]: (state, action) => {
                return {
                    ...state,
                    draftById: {
                        status: action.payload.status,
                        data: action.payload.data,
                    },
                };
            },
            [rejected]: (state) => {
                return {
                    ...state,
                    draftById: { message: "bi loi roi" },
                };
            },
        };
    }
    function updateDraftById() {
        const { pending, fulfilled, rejected } = extraActions.updateDraftById;
        return {
            [pending]: (state) => {
                return {
                    ...state,
                    isUpdating: false,
                };
            },
            [fulfilled]: (state, action) => {
                return {
                    ...state,
                    postDraft: {
                        isUpdating: true,
                        status: action.payload.status,
                        data: [...state.postDraft.data, action.payload.data],
                    },
                };
            },
            [rejected]: (state, action) => {
                return {
                    ...state,
                    isUpdating: false,
                    error: action.payload,
                };
            },
        };
    }
    function draftToPending() {
        const { pending, fulfilled, rejected } = extraActions.draftToPending;
        return {
            [pending]: (state) => {
                return {
                    ...state,
                    updating: false,
                };
            },
            [fulfilled]: (state, action) => {
                return {
                    postDraft: {
                        status: action.payload.status,
                        data: [
                            ...state.postDraft.data.filter(
                                (item) => item.id !== action.payload.blog.id,
                            ),
                        ],
                    },
                    postPending: {
                        status: action.payload.status,
                        data: [...state.postPending.data, action.payload.blog],
                    },
                };
            },
            [rejected]: (state, action) => {
                return {
                    ...state,
                    isUpdating: false,
                    error: action.payload,
                };
            },
        };
    }
    function getPostPendingAll() {
        const { pending, fulfilled, rejected } = extraActions.getPostPendingAll;
        return {
            [pending]: (state) => {},
            [fulfilled]: (state, action) => {
                return {
                    ...state,
                    postPending: {
                        status: action.payload.status,
                        data: action.payload.data,
                    },
                };
            },
            [rejected]: (state, action) => {},
        };
    }
    function upToActiveAndDownToDraft() {
        const { pending, fulfilled, rejected } =
            extraActions.upToActiveAndDownToDraft;
        return {
            [pending]: (state) => {},
            [fulfilled]: (state, action) => {
                state.postPending.data = state.postPending.data.filter(
                    (item) => item.id !== action.payload.data.id,
                );
                // return {
                //     ...state,
                //     postPending: {
                //         status: action.payload.status, //
                //         data: [
                //             ...state.postPending.data.filter(
                //                 (item) => item.id !== action.payload.data.id,
                //             ),
                //         ],
                //     },
                // };
            },
            [rejected]: (state, action) => {},
        };
    }
    function getPostActiveAllByUser() {
        const { pending, fulfilled, rejected } =
            extraActions.getPostActiveAllByUser;
        return {
            [pending]: (state) => {
                state.postAction = { loading: true };
            },
            [fulfilled]: (state, action) => {
                return {
                    ...state,
                    postAction: {
                        status: action.payload.status,
                        data: action.payload.data,
                    },
                };
            },
            [rejected]: (state, action) => {
                state.postAction = { error: action.payload.error };
            },
        };
    }
}
