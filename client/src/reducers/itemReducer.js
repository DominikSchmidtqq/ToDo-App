import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'Get Groceries'},
        { id: uuid(), name: 'Get Tickets'},
        { id: uuid(), name: 'Get Keys'},
        { id: uuid(), name: 'Get Clothes'}
    ]
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        default:
            return state;
    }
}