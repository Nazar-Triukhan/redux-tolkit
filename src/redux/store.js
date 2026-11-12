// import { configureStore } from "@reduxjs/toolkit";
// import contactReducer from './contactSlice'

// const loadStore = () => {
//     const saveData = localStorage.getItem('contacts')

//     if(saveData) {
//         return JSON.parse(saveData)
//     } else {
//         return undefined
//     }
// }

// export const store = configureStore({
//     reducer: {
//         contacts: contactReducer, 
//     }, 
//     preloadedState: loadStore(), 
// })

// store.subscribe(() => {
//     localStorage.setItem('contacts', JSON.stringify(store.getState()))
// })



import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import contactReducer from './contactSlice'
import {
    persistReducer, 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'; 

const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['contacts'], 
}

const persistedReducer = persistReducer(
    persistConfig, 
    contactReducer,
)

export const store = configureStore({
    reducer: {
        contacts: persistedReducer, 
    },  
     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

export const persistor = persistStore(store)

