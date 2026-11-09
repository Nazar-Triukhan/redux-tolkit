import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    contacts: [
            {
              id: "1",
              name: "Іван Петренко",
              number: "+380501112233",
            },
            {
              id: "2",
              name: "Марія Коваленко",
              number: "+380671234567",
            },
            {
              id: "3",
              name: "Олег Шевченко",
              number: "+380931234567",
            },
    ], 
    searchValue: '', 

}

const contactSlice = createSlice({
    name: 'contacts', 
    initialState, 
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload)
        }, 
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((item) => item.id !== action.payload)
        }, 
        updateContact: (state, action) => {
            state.contacts = state.contacts.map(contact => contact.id === action.payload.id?action.payload: contact)
        }, 
        changeSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    }, 




})

export const {addContact, deleteContact, updateContact, changeSearchValue} = contactSlice.actions;

export default contactSlice.reducer