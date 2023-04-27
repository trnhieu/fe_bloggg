import { storePost as store } from "../store/postStore";

export const fetchWrapper = {
    get: request("GET"),
    post: request("POST"),
    put: request("PUT"),
    delete: request("DELETE"),
};

function request(method) {
    return (url, body) => {
        const requestOptions = {
            method,
            headers: authHeader(url),
        };
        if (body) {
            requestOptions.headers["Content-Type"] = "application/json";
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(url, requestOptions).then(handleResponse);
    };
}

// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const token = authToken();
    const isLoggedIn = !!token;
    // const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
    if (isLoggedIn) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
}

function authToken() {
    return store.getState().users?.token;
}

function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);

        return data;
    });
}

// import axios from 'axios';
// import { store, authActions } from '_store';

// export const fetchWrapper = {
//     get: request('get'),
//     post: request('post'),
//     put: request('put'),
//     delete: request('delete')
// };

// function request(method) {
//     return async (url, body) => {
//         const headers = authHeader(url);
//         try {
//             const response = await axios({
//                 method,
//                 url,
//                 headers,
//                 data: body
//             });
//             return handleResponse(response);
//         } catch (error) {
//             if ([401, 403].includes(error.response.status) && authToken()) {
//                 // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
//                 const logout = () => store.dispatch(authActions.logout());
//                 logout();
//             }
//             const err = (error.response && error.response.data && error.response.data.message) || error.message || error;
//             return Promise.reject(err);
//         }
//     }
// }

// // helper functions

// function authHeader(url) {
//     // return auth header with jwt if user is logged in and request is to the api url
//     const token = authToken();
//     const isLoggedIn = !!token;
//     const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
//     if (isLoggedIn && isApiUrl) {
//         return { Authorization: `Bearer ${token}` };
//     } else {
//         return {};
//     }
// }

// function authToken() {
//     return store.getState().auth.user?.token;
// }

// function handleResponse(response) {
//     const data = response.data;
//     if (!response.status) {
//         const error = response.statusText || "Network error";
//         return Promise.reject(error);
//     } else if (response.status >= 400) {
//         const error = (data && data.message) || response.statusText;
//         return Promise.reject(error);
//     }
//     return data;
// }
