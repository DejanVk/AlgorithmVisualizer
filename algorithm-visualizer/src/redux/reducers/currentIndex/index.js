import { ADD_CURRENT_INDEX, RESET_CURRENT_INDEX, RESET_INDEX_AT } from '../../constants';

const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_CURRENT_INDEX:
            return [...state, action.payload];
        case RESET_CURRENT_INDEX:
            return [];
        case RESET_INDEX_AT:
            let arr = [...state];
            arr[action.payload] = null;
            return [...arr];
        default:
            return state;
    }
}